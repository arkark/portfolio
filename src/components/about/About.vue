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
          <treeview :items="activityItems"></treeview>
          <treeview :items="internItems"></treeview>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import Treeview from "@/components/about/Treeview";
import awardList from "@/data/award";
import activityList from "@/data/activity";
import internList from "@/data/intern";

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
              label: "東京工業大学デジタル創作同好会 traP",
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
              label: "競技プログラミング、CTF、ゲーム制作、創作、ゲーム、アニメ"
            },
            {
              id: "4-2",
              label:
                '好きなゲーム : <a href="https://store.steampowered.com/app/210970/The_Witness/">The Witness</a>、<a href="https://store.steampowered.com/app/381890/Induction/">Induction</a>、スマブラ',
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
                "アルゴリズム、データ構造、グラフ理論、代数、圏論、分散システム、ネットワーク、組合せ最適化、論理学",
              children: [
                {
                  id: "5-1-1",
                  label: "好きなアルゴリズム : imos法"
                },
                {
                  id: "5-1-2",
                  label: "好きなデータ構造 : Segment Tree"
                }
              ]
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
                "シェーダ、ビジュアライゼーション、ジェネラティブデザイン、サイバーセキュリティ、データベース"
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
              label: 'GitHub : <a href="https://github.com/ArkArk">ArkArk</a>',
              rawHtml: true
            },
            {
              id: "8-2",
              label:
                'Twitter : <a href="https://twitter.com/arkark_">@arkark_</a>',
              rawHtml: true
            },
            {
              id: "8-3",
              label:
                'Hatena Blog : <a href="https://ark4rk.hatenablog.com/archive">ark4rk</a>',
              rawHtml: true
            },
            // {
            //   id: "8-4",
            //   label: 'traP : <a href="https://trap.jp/author/ark/">Ark</a>',
            //   rawHtml: true
            // },
            // {
            //   id: "8-5",
            //   label: 'Qiita : <a href="https://qiita.com/Ark">Ark</a>',
            //   rawHtml: true
            // },
            {
              id: "8-6",
              label:
                'AtCoder : <a href="https://atcoder.jp/user/arkark">arkark</a>',
              rawHtml: true
            },
            {
              id: "8-7",
              label:
                'Shadertoy : <a href="https://www.shadertoy.com/user/Ark">Ark</a>',
              rawHtml: true
            },
            {
              id: "8-8",
              label: "Project Euler : Ark__",
              src: "https://projecteuler.net/profile/Ark__.png"
            }
            // {
            //   id: "8-9",
            //   label:
            //     'Docker Hub : <a href="https://hub.docker.com/u/arkark">arkark</a>',
            //   rawHtml: true
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
              label: "メイン : D"
            },
            {
              id: "9-2",
              label: "よく使う : Kotlin、JavaScript"
            },
            {
              id: "9-3",
              label:
                "使う : Rust、C、C++、Go、Python、Java、Processing、GLSL、Shell Script"
            },
            {
              id: "9-4",
              label: "少し : Scala、PHP、Prolog、Ruby"
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
      activityItems: [activityList],
      internItems: [internList]
    };
  },
  components: {
    Treeview
  }
};
</script>
