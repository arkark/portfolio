"use strict";

const p5 = require("p5");

const sketch = (p) => {

    const CANVAS_WIDTH  = 500;
    const CANVAS_HEIGHT = 500;
    const HEX_SIZE = 20;
    const CELL_NUM = 5;

    const label = document.querySelector("#label");

    function iota(n) {
        return Array.from({length: n}, (_, i) => i);
    }

    function hexToCartesian(hex) {
        return {
            x: HEX_SIZE * 3/2 * hex.q,
            y: HEX_SIZE * p.sqrt(3) * (hex.r + hex.q/2)
        };
    }

    function cartesianToHex(cart) {
        let q = p.round(cart.x * 2/3 / HEX_SIZE);
        let r = p.round((-cart.x/3 + p.sqrt(3)/3*cart.y) / HEX_SIZE);
        let s = -q-r;
        return {q: q, r: r, s: s};
    }

    class HexCell {
        constructor(q, r) {
            this.q = q;
            this.r = r;
            this.s = -q-r;

            this.isSelected = false;
        }

        get length() {
            return (
                p.abs(this.q) +
                p.abs(this.r) +
                p.abs(this.s)
            ) / 2;
        }

        get isHovered() {
            let cart = {
                x: p.mouseX - CANVAS_WIDTH/2,
                y: p.mouseY - CANVAS_HEIGHT/2
            };
            let that = cartesianToHex(cart);
            return this.distance(that) < 1;
        }

        get hex() {
            return {q: this.q, r: this.r, s: this.s};
        }

        distance(that) {
            return (
                p.abs(this.q - that.q) +
                p.abs(this.r - that.r) +
                p.abs(this.s - that.s)
            ) / 2;
        }

        setLabel() {
            let red   = (v) => "<span style='color: red;'>"   + v + "</span>";
            let green = (v) => "<span style='color: green;'>" + v + "</span>";
            let blue  = (v) => "<span style='color: blue;'>"  + v + "</span>";
            let paren = (v1, v2, v3) => "(" + v1 + ", " + v2 + ", " + v3 + ")";
            let eq = (v1, v2) => v1 + " = " + v2;
            label.innerHTML = eq(
                paren(red("q"), green("r"), blue("s")),
                paren(red(this.q), green(this.r), blue(this.s))
            );
        }

        setColor() {
            p.strokeWeight(6);
            if (this.isSelected) {
                p.fill(60, 80, 60);
                p.stroke(200, 220, 240);
            } else if (this.isHovered) {
                p.fill(240, 180, 80);
                p.stroke(100, 0, 0);
                this.setLabel();
            } else {
                p.fill(200, 220, 240);
                p.stroke(60, 80, 60);
            }
        }

        select() {
            this.isSelected ^= true;
        }

        draw() {
            this.setColor();
            let cart = hexToCartesian(this.hex);
            p.beginShape();
            for(let i=0; i<6; i++) {
                let x = cart.x + 0.80*HEX_SIZE*p.cos(p.radians(60*i));
                let y = cart.y + 0.80*HEX_SIZE*p.sin(p.radians(60*i));
                p.vertex(x, y);
            }
            p.endShape(p.CLOSE);
        }

        vertex() {
            let cart = hexToCartesian(this.hex);
            p.vertex(cart.x, cart.y);
        }
    }

    let __cellAssoc = {};
    function hasCell(hex) {
        return [hex.q, hex.r] in __cellAssoc;
    }
    function getCell(hex) {
        return __cellAssoc[[hex.q, hex.r]];
    }
    function setCell(hex, cell) {
        __cellAssoc[[hex.q, hex.r]] = cell;
    }
    function getAllCells() {
        return Object.values(__cellAssoc);
    }

    function drawCoordinate() {
        let num = CELL_NUM + 2;
        let drawOne = (col, deg, isPoints, weight) => {
            p.push();
            p.rotate(p.radians(deg));
            p.strokeWeight(weight);
            p.stroke(col);
            p.noFill();
            if (isPoints) {
                p.beginShape(p.POINTS);
                for(let i=-num+1; i<num; i++) {
                    p.vertex(HEX_SIZE * 3/2 * i, 0);
                }
            } else {
                p.beginShape();
                for(let i=-num; i<=num; i++) {
                    p.vertex(HEX_SIZE * 3/2 * i, 0);
                }
                p.vertex(HEX_SIZE * 3/2 * (num - 1), HEX_SIZE);
                p.vertex(HEX_SIZE * 3/2 * num, 0);
                p.vertex(HEX_SIZE * 3/2 * (num - 1), -HEX_SIZE);
                p.vertex(HEX_SIZE * 3/2 * num, 0);
            }
            p.endShape();
            p.pop();
        }
        drawOne(p.color(240, 90, 90, 120), 0, false, 5);
        drawOne(p.color(240, 70, 70, 160), 0, true, 8);
        drawOne(p.color(70, 200, 70, 120), 120, false, 5);
        drawOne(p.color(50, 200, 50, 160), 120, true, 8);
        drawOne(p.color(90, 90, 240, 120), 240, false, 5);
        drawOne(p.color(70, 70, 240, 160), 240, true, 8);
    }

    function shot() {
        let cart = {
            x: p.mouseX - CANVAS_WIDTH/2,
            y: p.mouseY - CANVAS_HEIGHT/2
        };
        let hex = cartesianToHex(cart);
        if (hasCell(hex)) {
            let cell = getCell(hex);
            cell.select();
            let goStraight = (diff) => {
                let i=0;
                let rec = () => {
                    i++;
                    let h = {
                        q: cell.q + i*diff.q,
                        r: cell.r + i*diff.r,
                        s: cell.s + i*diff.s
                    };
                    if (!hasCell(h)) return;
                    getCell(h).select();
                    setTimeout(rec, 100);
                };
                rec();
            };
            goStraight({q: +0, r: +1, s: -1});
            goStraight({q: +0, r: -1, s: +1});
            goStraight({q: -1, r: +0, s: +1});
            goStraight({q: +1, r: +0, s: -1});
            goStraight({q: +1, r: -1, s: +0});
            goStraight({q: -1, r: +1, s: +0});
        }
    }

    function refresh() {
        getAllCells().forEach(
            cell => cell.isSelected = false
        );
    }

    p.setup = () => {
        p.strokeCap(p.ROUND);
        p.strokeJoin(p.ROUND);
        p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        let num = 100;
        let grid = iota(num).map(
            i => i - num/2
        ).map(
            q => iota(num).map(
                j => j - num/2
            ).map(
                r => new HexCell(q, r)
            ).filter(
                cell => cell.length <= CELL_NUM
            )
        );
        grid.forEach(
            cells => cells.forEach(
                cell => setCell(cell.hex, cell)
            )
        );
    };

    let shouldDrawCoordinate = true;

    p.draw = () => {
        p.background(255);
        p.translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
        getAllCells().filter(
            cell => cell.length <= CELL_NUM
        ).forEach(
            cell => cell.draw()
        );

        if (shouldDrawCoordinate) drawCoordinate();
    };

    p.mousePressed = () => {
        let cart = {
            x: p.mouseX - CANVAS_WIDTH/2,
            y: p.mouseY - CANVAS_HEIGHT/2
        };
        let hex = cartesianToHex(cart);
        if (hasCell(hex)) {
            getCell(hex).select();
        }
    }

    p.keyPressed = () => {
        if (p.keyCode == 32) { // space key
            shot();
        }
        if (p.keyCode == 90) { // z key
            shouldDrawCoordinate ^= true;
        }
        if (p.keyCode == 88) { // x key
            refresh();
        }
    }

};

const app = new p5(sketch, document.querySelector("#sketch"));
