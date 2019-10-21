<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card color="#fff0" flat class="ma-3">
        <v-card-title primary-title class="px-3 pt-2 pb-0">
          <p class="display-1 mb-0 pl-2">
            <v-icon large>fas fa-address-card</v-icon>&nbsp;&nbsp;About
          </p>
        </v-card-title>
        <v-card-text class="py-2">
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="text--primary">
          <treeview :items="mainItems"></treeview>
        </v-card-text>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="text--primary">
          <treeview :items="awardItems"></treeview>
        </v-card-text>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="text--primary">
          <treeview :items="internItems"></treeview>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Treeview from "@/components/about/Treeview";
import awardList from "@/data/award";
import internList from "@/data/intern";
import atcoder from "@/components/about/atcoder.js";

export default {
  data: function() {
    return {
      mainItems: [
        {
          id: "1",
          label: "名前",
          icon: "fas fa-user",
          children: [
            {
              id: "1-1",
              label: "Takeshi Kaneko"
            }
          ]
        },
        {
          id: "2",
          label: "ハンドルネーム",
          icon: "fas fa-user-tag",
          children: [
            {
              id: "1-1",
              label: "Ark / アーク"
            }
          ]
        },
        {
          id: "3",
          label: "所属",
          icon: "fas fa-graduation-cap",
          children: [
            {
              id: "2-1",
              label: "東京工業大学 情報理工学院 数理・計算科学系"
            }
          ]
        },
        {
          id: "4",
          label: "サークル",
          icon: "fas fa-users",
          children: [
            {
              id: "3-1",
              label: "デジタル創作同好会 traP",
              url: "https://trap.jp/"
            }
          ]
        },
        {
          id: "5",
          label: "趣味",
          icon: "fas fa-gamepad",
          children: [
            {
              id: "4-1",
              label:
                "競技プログラミング、CTF、ゲーム制作、創作全般、ゲーム、アニメ"
            },
            {
              id: "4-2",
              label:
                '好きなゲーム：<a href="https://store.steampowered.com/app/210970/The_Witness/">The Witness</a>、<a href="https://store.steampowered.com/app/381890/Induction/">Induction</a>、スマブラ',
              rawHtml: true
            }
          ]
        },
        {
          id: "6",
          label: "興味分野",
          icon: "fas fa-flask",
          children: [
            {
              id: "5-1",
              label:
                "アルゴリズム、データ構造、グラフ理論、代数、圏論、論理学、分散システム、組合せ最適化"
            }
          ]
        },
        {
          id: "7",
          label: "興味技術",
          icon: "fas fa-cogs",
          children: [
            {
              id: "6-1",
              label:
                "シェーダ、ビジュアライゼーション、ジェネラティブデザイン、サイバーセキュリティ、コンテナ"
            }
          ]
        },
        {
          id: "8",
          label: "アカウント",
          icon: "fas fa-user-circle",
          children: [
            {
              id: "8-1",
              label: "GitHub : ArkArk",
              url: "https://github.com/ArkArk"
            },
            {
              id: "8-2",
              label: "Twitter : @arkark_",
              url: "https://twitter.com/arkark_"
            },
            {
              id: "8-3",
              label: "Hatena Blog : ark4rk",
              url: "https://ark4rk.hatenablog.com/archive"
            },
            // {
            //   id: "8-4",
            //   label: "traP：Ark",
            //   url: "https://trap.jp/author/ark/"
            // },
            // {
            //   id: "8-5",
            //   label: "Qiita：Ark",
            //   url: "https://qiita.com/Ark"
            // },
            {
              id: "8-6",
              label: `
                <span>AtCoder : arkark</span>
                <a
                  href="https://atcoder.jp/user/arkark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="${atcoder.badgeUrl}"
                    style="vertical-align: middle;"
                  >
                </a>
                `,
              rawHtml: true
            },
            {
              id: "8-7",
              label: "Shadertoy : Ark",
              url: "https://www.shadertoy.com/user/Ark"
            },
            {
              id: "8-8",
              label: "Project Euler : Ark__",
              src: "https://projecteuler.net/profile/Ark__.png"
            }
            // {
            //   id: "8-9",
            //   label: "Docker Hub：arkark",
            //   url: "https://hub.docker.com/u/arkark"
            // }
          ]
        },
        {
          id: "9",
          label: "言語",
          icon: "fas fa-laptop-code",
          children: [
            {
              id: "9-1",
              label: "常用：D"
            },
            {
              id: "9-2",
              label:
                "使う：Kotlin、Go、C、C++、JavaScript、Java、Processing、GLSL、Shell Script"
            },
            {
              id: "9-3",
              label: "少し：Rust、Scala、PHP、Prolog、Ruby、Python"
            }
          ]
        },
        {
          id: "10",
          label: "スキル（ツール・ライブラリ等）",
          icon: "fas fa-code-branch",
          children: [
            {
              id: "10-1",
              label:
                '<a href="https://github.com/ArkArk/dotfiles/blob/master/files/.gitconfig">Git</a>、Docker、Vue.js、Qt、libGDX',
              rawHtml: true
            }
          ]
        }
      ],
      awardItems: [awardList],
      internItems: [internList]
    };
  },
  components: {
    Treeview
  }
};
</script>
