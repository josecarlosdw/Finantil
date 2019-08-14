
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Financiamentoprivado', component: () => import('pages/Financiamentoprivado.vue') },
      { path: 'Financiamentopublico', component: () => import('pages/Financiamentopublico.vue') },
      { path: 'Dicas', component: () => import('pages/Dicas.vue') },
      { path: 'Pravaler', component: () => import('pages/Pravaler.vue') },
      { path: 'Novidades', component: () => import('pages/Novidades.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
