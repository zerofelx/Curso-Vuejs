Vue.component('modal', {
    props: ['ShowModal', "title"],
    template: `
      <div v-show="ShowModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }}</h3>
                <div>
                <slot name="body"></slot>
                </div>
            <footer>
              <button v-on:click="close()">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>
    `,
    methods: {
        close() {
            this.$emit('close-modal')
        }
    }
    
})
  
new Vue({
    el: '#app',
    data() {
        return {
            ShowModal: false,
            title: "Modal",
        }
    },

    methods: {
        ToggleModal() {
            this.ShowModal = !this.ShowModal
        }
    }
})