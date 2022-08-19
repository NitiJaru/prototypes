<template>
  <ion-page>
    <ion-content class="ion-padding" mode="ios">

      <ion-list class="ion-margin-bottom" lines="full">
        <ion-list-header class="ion-padding">
          <ion-label>Reference tools</ion-label>
        </ion-list-header>

        <a target="_blank" href="https://ionicframework.com/docs/components">
          <ion-item color="tertiary" button>
            <ion-label>UI Components</ion-label>
          </ion-item>
        </a>
        <a target="_blank" href="https://ionic.io/ionicons">
          <ion-item color="tertiary" button>
            <ion-label>Icons</ion-label>
          </ion-item>
        </a>

      </ion-list>

      <!-- <ion-list class="ion-margin-bottom" lines="full" v-for="info in data" v-bind:key="info">
        <ion-list-header class="ion-padding">
          <ion-label>{{ info.title }}</ion-label>
        </ion-list-header>

        <div v-for="item in info.data" v-bind:key="item">
          <a v-if="item.link" @click="() => router.push(item.link)">
            <ion-item color="tertiary" button v-bind:class="{ 'indent': item.isSub }">
              <ion-label>
                {{ item.title }}
                <p v-if="item.required">
                  <ion-text color="medium">{{ item.required }}</ion-text>
                </p>
              </ion-label>
            </ion-item>
          </a>
          <ion-item v-if="!item.link" color="light" lines="none" v-bind:class="{ 'indent': item.isSub }">
            <ion-label>
              {{ item.title }}
              <p v-if="item.required">
                <ion-text color="medium">{{ item.required }}</ion-text>
              </p>
            </ion-label>
          </ion-item>
        </div>

      </ion-list> -->

      <ion-list class="ion-margin-bottom" lines="full">
        <ion-list-header class="ion-padding">
          <ion-label>Flows</ion-label>
        </ion-list-header>

        <ion-item lines="none">
          <ion-label>
            <b>Cart</b>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            1. Pre Catalog
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            2. Catalog
            <ion-text color="medium">- เพิ่มสินค้าเข้าตระกร้า</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            3. Post Catalog
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            4. Cart Edit
            <ion-text color="medium">- ตระกร้าสินค้า</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            5. Cart Confirm
            <ion-text color="medium">- ชำระเงินตระกร้า</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            6. Purchase complete
            <ion-text color="medium">- ใบเสร็จ</ion-text>
          </ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-label>
            <b>บัญชี</b>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            1. Accounts list
            <ion-text color="medium">- รายชื่อบัญชีทั้งหมด</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            2. Create Account
            <ion-text color="medium">- เพิ่มบัญชีธนาคาร/พร้อมเพย์</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            2.1. Bank select
            <ion-text color="medium">- เลือกธนาคาร</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            3. Confirm create account
            <ion-text color="medium">- เลือกธนาคาร</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            4. Create complete
          </ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-label>
            <b>Consents</b>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            • สมัครสมาชิก
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            •• agreement
            <ion-text color="medium">- ข้อตกลงการสมัครสมาชิก</ion-text>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            • ขอข้อมูลผู้ใช้
          </ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-label>
            <b>ETC</b>
          </ion-label>
        </ion-item>
        <ion-item color="tertiary" button>
          <ion-label>
            Home Feed
          </ion-label>
        </ion-item>



      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter()
    const data: any = [{
      title: "Template pages (Vue)",
      data: [
        new ListInfo("ตระกร้าสินค้า (แก้ไข)", "/cart-edit-template"),
        new ListInfo("ตระกร้าสินค้า (จ่ายเงิน)", "/cart-checkout-template"),
        new ListInfo("ตระกร้าสินค้า (ผลลัพธ์จ่ายเงิน) dialog", "/cart-dialog-template"),
        new ListInfo("ฟอร์มข้อมูล", "/form-template"),
        new ListInfo("Input แบบอื่นๆ", "/form-input-template", "", true),
        new ListInfo("Binding data", "/form-binding", "module, ts", true),
        new ListInfo("รับ/ส่งข้อมูล ระหว่างหน้า", "/form-send-data", "module, ts", true),
        new ListInfo("รับ/ส่งข้อมูล ผ่าน Service", "/form-service", "module, ts, service", true),
        new ListInfo("Confirm dialog", "/form-confirm-dialog", "module, ts", true),
        new ListInfo("Standard Input", "/form-input", "module, scss, ts", true),
        new ListInfo("ลิสต์รายการ", "/list-template"),
        new ListInfo("Option dialog", "/option-dialog-template"),
        new ListInfo("Binding data", "/option-dialog-binding", "module, ts", true),
        new ListInfo("ไม่มีปุ่ม submit", "/option-dialog-no-submit", "module, ts", true),
        new ListInfo("หน้าคั่น", "/condition-template", "scss"),
        new ListInfo("หน้าคั่น (นับเวลาถอยหลัง)", "/condition-timer-template", "scss, ts", true),
        new ListInfo("ข้อตกลง (agreement)", "/agreement-template"),
        new ListInfo("ขอความยินยอม (consent)"),
        new ListInfo("ข้อมูล (ผู้ใช้อนุมัติ)", "/consent-info-user-template", "", true),
        new ListInfo("ข้อมูล (ผู้ดูแลอนุมัติ)", "/consent-info-manager-template", "", true),
        new ListInfo("สมัครสมาชิก", "/consent-register-template", "", true),
        new ListInfo("หน้าหลัก (home)", "/home-template", "scss, ts"),
      ]
    }];
    return {
      router,
      data
    }
  }
});

export class ListInfo {
  constructor(private title: string, private link: string = "", private required: string = "", private isSub: boolean = false) { }
}

</script>
<style scoped>
a {
  text-decoration: none;
}

.indent {
  margin-left: 2.4em !important;
}
</style>