<template>
  <div class="page-home__container">
    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成router</span>
          <div @click="openLink('https://router.vuejs.org/zh/')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <el-button @click="$router.push('/401')">401</el-button>
        <el-button @click="$router.push('/404')">404</el-button>
        <el-button @click="$router.push('/500')">500</el-button>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成pinia</span>
          <div @click="openLink('https://pinia.web3doc.top/')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-20px flex flex-col justify-center items-center">
          <span>{{ $store.example.count }}</span>
          <el-button type="primary" class="mt-10px" @click="$store.example.setCount()">点击+1</el-button>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成mittBus</span>
          <div @click="openLink('https://www.npmjs.com/package/mitt')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-40px text-center">
          <el-button type="primary" @click="$mittBus.emit('global:test-mittBus')">点击发送事件</el-button>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成vConsole</span>
          <div @click="openLink('https://www.npmjs.com/package/@achengyu/vconsole')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-40px text-center">
          <el-button type="primary" @click="onConsoleClick">点击测试打印</el-button>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成localTango</span>
          <div @click="openLink('https://www.npmjs.com/package/local-tango')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-10px grid grid-cols-2 justify-center items-center gap-y-20px">
          <el-button type="primary" @click="onLocalTangoClick('setLocal')">设置数据到本地</el-button>
          <el-button type="primary" @click="onLocalTangoClick('readLocal')">读取数据从本地</el-button>
          <el-button type="primary" class="!ml-0" @click="onLocalTangoClick('setEncryptLocal')">设置加密数据到本地</el-button>
          <el-button type="primary" @click="onLocalTangoClick('readEncryptLocal')">读取加密数据从本地</el-button>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成windicss</span>
          <div @click="openLink('https://windicss.org/')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-10px text-center">
          <p class="underline text-[#c026db]">you can use css easily</p>
          <p class="line-through text-[#e11d48] leading-40px">only set some class</p>
          <p class="text-24px font-bold">example font size</p>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成Lottie</span>
          <div @click="openLink('https://www.npmjs.com/package/vue3-lottie')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="flex justify-center">
          <Vue3Lottie :animation-data="animate401" :height="100" :width="100" />
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成Axios</span>
          <div @click="openLink('https://www.npmjs.com/package/axios')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-40px text-center">
          <el-button type="primary" :loading="loading" @click="onAxiosClick">点击测试请求</el-button>
        </div>
      </template>
    </el-card>

    <el-card shadow="hover">
      <template #header>
        <div class="flex justify-between items-center">
          <span>集成Purge Icon</span>
          <div @click="openLink('https://www.npmjs.com/package/purge-icon-vue3')">
            <PurgeIcon class="cursor-pointer hover:text-[#409eff]" icon="ep:share" />
          </div>
        </div>
      </template>

      <template #default>
        <div class="mt-30px flex justify-between items-center">
          <div class="flex flex-col justify-center items-center">
            <PurgeIcon icon="twemoji:angry-face" />
            <span class="text-12px text-[#909399] mt-5px">iconify</span>
          </div>

          <div class="flex flex-col justify-center items-center">
            <PurgeIcon type="svg" icon="icon-loading" spin />
            <span class="text-12px text-[#909399] mt-5px">本地svg</span>
          </div>

          <div class="flex flex-col justify-center items-center">
            <PurgeIcon type="iconfont" icon="icon-a-dengpaozhuyichuangxin" color="#f2d567" />
            <span class="text-12px text-[#909399] mt-5px">iconfont</span>
          </div>

          <div class="flex flex-col justify-center items-center">
            <PurgeIcon type="svg" icon="icon-gongjiaochechezhanzhantai" />
            <span class="text-12px text-[#909399] mt-5px">symbol</span>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  import {onMounted, onUnmounted, ref} from 'vue';
  import {ElNotification} from 'element-plus';
  import {mittBus} from '@/common/plugins/mittPlugin';
  import {request} from '@/common/plugins/requestPlugin';
  import animate401 from '@/assets/lottie/401.json';

  // 事件 - 收到mittBus消息
  const onMittBusMsg = () => {
    ElNotification({
      type: 'success',
      title: '接收到mittBus消息',
    })
  }

  // 事件 - 测试控制台打印
  const onConsoleClick = () => {
    vconsole.log('test', 'vconsole测试打印信息')
    vconsole.info('test', 'vconsole测试打印信息')
    vconsole.debug('test', 'vconsole测试打印信息')
    vconsole.error('test', 'vconsole测试打印信息')

    ElNotification({
      type: 'warning',
      title: 'vconsole信息已打印',
      message: '按f12，在控制台查看打印'
    })
  }

  // 事件 - 测试axios
  const loading = ref(false)
  const onAxiosClick = () => {
    loading.value = true
    request
        .get('https://www.fastmock.site/mock/0370a6398e401668cbe97c67d017cfde/unifyAccess/auth/captcha')
        .then(() => {
          ElNotification({
            type: 'success',
            title: '接收到axios请求返回结果'
          })
        })
        .finally(() => {
          setTimeout(() => loading.value = false, 300)
        })
  }

  // 事件 - 测试LocalTango
  const onLocalTangoClick = (type: string) => {
    switch (type) {
      case 'setLocal':
        localTango.setItemJSON('local', { text: 'localTango测试文本' })
        ElNotification({
          type: 'success',
          title: 'localTango设置数据成功',
          message: '请按f12到本地存储中查看'
        })
        break
      case 'readLocal':
        vconsole.log('localTango', localTango.getItemJSON('local'))
        ElNotification({
          type: 'success',
          title: 'localTango读取数据成功',
          message: '请按f12到控制台查看'
        })
        break
      case 'setEncryptLocal':
        localTango.encrypt.setItemJSON('localEncrypt', { text: 'localTango测试加密文本' })
        ElNotification({
          type: 'success',
          title: 'localTango设置加密数据成功',
          message: '请按f12到本地存储中查看'
        })
        break
      case 'readEncryptLocal':
        vconsole.log('localTango', localTango.encrypt.getItemJSON('localEncrypt'))
        ElNotification({
          type: 'success',
          title: 'localTango读取加密数据成功',
          message: '请按f12到控制台查看'
        })
        break
      default:
        break
    }
  }

  // 事件 - 外链
  const openLink = (link: string) => {
    window.open(link)
  }

  onMounted(() => {
    mittBus.on('global:test-mittBus', onMittBusMsg)
  })

  onUnmounted(() => {
    mittBus.off('global:test-mittBus', onMittBusMsg)
  })
</script>

<style lang="scss" scoped>
  .page-home__container {
    @apply w-full p-60px grid grid-cols-4 justify-center items-center gap-y-20px;
  }

  .el-card {
    width: 400px;
    height: 200px;
    ::v-deep(.el-card__header) {
      background-color: #E4E7ED;
    }
  }
</style>
