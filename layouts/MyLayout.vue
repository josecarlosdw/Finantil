<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Finantil
        </q-toolbar-title>

          <q-item to="/">
            <q-item-section class="text-white" avatar>
              <q-icon name="home"/>
            </q-item-section>
          </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item to="/">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Novidades">
          <q-item-section avatar>
            <q-icon name="autorenew" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Novidades</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Financiamentoprivado">
          <q-item-section avatar>
            <q-icon name="lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Financiamento Privado</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/Financiamentopublico">
          <q-item-section avatar>
            <q-icon name="accessibility" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Financiamento Público</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-item to="/Dicas">
          <q-item-section avatar>
            <q-icon name="build" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dicas</q-item-label>
          </q-item-section>
        </q-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
  }
}
</script>
