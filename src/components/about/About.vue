<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card color="rgba(255, 255, 255, 0.9)" class="elevation-6 pa-2">
        <v-card-title primary-title class="px-3 pt-2 pb-0">
          <p class="display-1 mb-0 pl-2">
            <v-icon large>fas fa-address-card</v-icon>&nbsp;&nbsp;About
          </p>
        </v-card-title>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="py-2">
          <treeview :items="mainItems"></treeview>
        </v-card-text>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="py-2">
          <treeview :items="awardItems"></treeview>
        </v-card-text>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="pt-2">
          <treeview :items="internItems"></treeview>
        </v-card-text>
        <!-- <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="py-2">
          <treeview :items="articleItems"></treeview>
        </v-card-text> -->
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Treeview from "@/components/about/Treeview";
import awardList from "@/data/awardList";
import internList from "@/data/internList";
import articleList from "@/data/articleList";

export default {
  data: function() {
    return {
      mainItems: [
        {
          id: "1",
          name: "名前",
          icon: "fas fa-user",
          children: [
            {
              id: "1-1",
              name: "Takeshi Kaneko"
            }
          ]
        },
        {
          id: "2",
          name: "ハンドルネーム",
          icon: "fas fa-user-tag",
          children: [
            {
              id: "1-1",
              name: "Ark / アーク"
            }
          ]
        },
        {
          id: "3",
          name: "所属",
          icon: "fas fa-graduation-cap",
          children: [
            {
              id: "2-1",
              name: "東京工業大学 情報理工学院 数理・計算科学系"
            }
          ]
        },
        {
          id: "4",
          name: "サークル",
          icon: "fas fa-users",
          children: [
            {
              id: "3-1",
              name: "デジタル創作同好会 traP",
              url: "https://trap.jp/"
            }
          ]
        },
        {
          id: "5",
          name: "趣味",
          icon: "fas fa-gamepad",
          children: [
            {
              id: "4-1",
              name:
                "ゲーム制作、競技プログラミング、CTF、創作全般、ゲーム、アニメ"
            },
            {
              id: "4-2",
              name:
                '好きなゲーム：<a href="https://store.steampowered.com/app/210970/The_Witness/">The Witness</a>、<a href="https://store.steampowered.com/app/381890/Induction/">Induction</a>、スマブラ',
              rawHtml: true
            }
          ]
        },
        {
          id: "6",
          name: "興味分野",
          icon: "fas fa-flask",
          children: [
            {
              id: "5-1",
              name:
                "アルゴリズム、データ構造、グラフ理論、代数、圏論、論理学、組合せ最適化、分散システム、ゲーム理論、プログラム意味論"
            }
          ]
        },
        {
          id: "7",
          name: "興味技術",
          icon: "fas fa-cogs",
          children: [
            {
              id: "6-1",
              name:
                "シェーダ、ビジュアライゼーション、ジェネラティブデザイン、サイバーセキュリティ、コンテナ"
            }
          ]
        },
        {
          id: "8",
          name: "アカウント",
          icon: "fas fa-user-circle",
          children: [
            {
              id: "8-1",
              name: "GitHub : ArkArk",
              url: "https://github.com/ArkArk"
            },
            {
              id: "8-2",
              name: "Twitter : @arkark_",
              url: "https://twitter.com/arkark_"
            },
            {
              id: "8-3",
              name: "Hatena Blog : ark4rk",
              url: "http://ark4rk.hatenablog.com/"
            },
            // {
            //   id: "8-4",
            //   name: "traP：Ark",
            //   url: "https://trap.jp/author/ark/"
            // },
            // {
            //   id: "8-5",
            //   name: "Qiita：Ark",
            //   url: "https://qiita.com/Ark"
            // },
            {
              id: "8-6",
              name: "AtCoder : arkark",
              url: "https://atcoder.jp/user/arkark"
            },
            {
              id: "8-7",
              name: "Shadertoy : Ark",
              url: "https://www.shadertoy.com/user/Ark"
            },
            {
              id: "8-8",
              name: "Project Euler : Ark__",
              src: "https://projecteuler.net/profile/Ark__.png"
            }
            // {
            //   id: "8-9",
            //   name: "Docker Hub：arkark",
            //   url: "https://hub.docker.com/u/arkark"
            // }
          ]
        },
        {
          id: "9",
          name: "言語",
          icon: "fas fa-laptop-code",
          children: [
            {
              id: "9-1",
              name: "常用：D"
            },
            {
              id: "9-2",
              name: "使う：Kotlin、C、C++、JavaScript、Java、Processing、GLSL"
            },
            {
              id: "9-3",
              name: "少し：Scala、PHP、Prolog、Python"
            },
            {
              id: "9-4",
              name: "勉強中：Rust、Haskell、Go"
            }
          ]
        },
        {
          id: "10",
          name: "スキル（ツール・ライブラリ等）",
          icon: "fas fa-code-branch",
          children: [
            {
              id: "10-1",
              name: "Git、Docker、Vue.js、Qt、libGDX"
            }
          ]
        }
      ],
      awardItems: [awardList],
      internItems: [internList],
      articleItems: [articleList]
    };
  },
  components: {
    Treeview
  }
};
</script>
