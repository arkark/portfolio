<template>
  <v-treeview :items="items" open-all>
    <template slot="prepend" slot-scope="{ item }">
      <v-icon v-if="typeof item.icon !== 'undefined'" size="16px">
        {{ item.icon }}
      </v-icon>
    </template>
    <template slot="label" slot-scope="{ item }">
      {{ item.name }}
      <v-btn
        v-if="typeof item.url !== 'undefined'"
        :href="item.url"
        color="primary"
        icon
        flat
        small
      >
        <v-icon size="16px">fas fa-external-link-alt</v-icon>
      </v-btn>
      <v-dialog v-if="typeof item.src !== 'undefined'" width="500">
        <v-btn
          slot="activator"
          :href="item.url"
          color="primary"
          icon
          flat
          small
        >
          <v-icon size="16px">fas fa-expand</v-icon>
        </v-btn>
        <v-card>
          <v-img :src="item.src"></v-img>
        </v-card>
      </v-dialog>
    </template>
  </v-treeview>
</template>

<script>
export default {
  props: ["items"]
};
</script>
