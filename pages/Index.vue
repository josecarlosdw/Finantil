<template>
  <q-page class="flex">
      <q-card class="my-card bg-orange text-white">
        <q-card-section>
          <div class="text-h6">PraValer</div>
          <div class="text-subtitle2">Financiamento privado</div>
        </q-card-section>

        <q-card-actions>
          <q-btn class="spcBtn" @click.native="openURL('https://www.pravaler.com.br/simulador/')">Simular</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-red text-white">
        <q-card-section>
          <div class="text-h6">PEP</div>
          <div class="text-subtitle2">Financiamento privado</div>
        </q-card-section>

        <q-card-actions>
          <q-btn class="spcBtn" @click.native="openURL('https://www.parceleafaculdade.com.br/')">Simular</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-blue text-white">
        <q-card-section>
          <div class="text-h6">PRIUNI</div>
          <div class="text-subtitle2">Financiamento público</div>
        </q-card-section>

        <q-card-actions class="spcBtn">
          <q-btn class="spcBtn" @click.native="openURL('https://www.educamaisbrasil.com.br/programas-do-governo')">Simular</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-green text-white">
        <q-card-section>
          <div class="text-h6">Fies</div>
          <div class="text-subtitle2">Financiamento público</div>
        </q-card-section>
        <q-card-section class="spcBtn">
          <q-btn class="spcBtn" @click.native="openURL('https://www.educamaisbrasil.com.br/fies/notas-de-corte')">Simular</q-btn>
        </q-card-section>
      </q-card>

  </q-page>
</template>

<style>
.my-card{
  width: 100%;
  padding: 15px;
  margin: 10px;
  border-radius: 5px
}
.spcBtn{
  margin-top: 20px;
}

</style>

<script>

import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  methods: {
    openURL
  }
}
</script>
