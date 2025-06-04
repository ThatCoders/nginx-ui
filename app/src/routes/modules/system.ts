import type { RouteRecordRaw } from 'vue-router'
import { InfoCircleOutlined } from '@ant-design/icons-vue'

export const systemRoutes: RouteRecordRaw[] = [
  {
    path: 'system',
    name: 'System',
    redirect: 'system/about',
    meta: {
      name: () => $gettext('System'),
      icon: InfoCircleOutlined,
    },
    children: [{
      path: 'self_check',
      name: 'Self Check',
      component: () => import('@/views/system/SelfCheck.vue'),
      meta: {
        name: () => $gettext('Self Check'),
      },
    }],
  },
]
