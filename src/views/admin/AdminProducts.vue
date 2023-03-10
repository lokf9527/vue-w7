<template>
    <div>
      <div class="text-end mt-4">
        <button class="btn btn-primary" type="button" >
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td></td>
            <td></td>
            <td class="text-right">
            </td>
            <td class="text-right">
            </td>
            <td>
              <span  class="text-success">啟用</span>
              <span >未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
    data () {
      return {
        products:[]
      }
    },
    methods: {
      getProducts () {
        this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products/all`) 
          .then((res)=>{
            this.products = res.data.products
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })
      },
    },
    mounted() {
    //   this.getProducts()
    }

}
</script>