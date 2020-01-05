const ErrorTime = 6000
const app = new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title: "",
          time: null,
          totalTime: 0,

          // Errores
          TitleError: null,
          NumberError: null,
          Error: null
      }
    },
    
    computed: {
        ExistCourses() {
            if (Object.keys(this.courses).length !== 0) {
                return true
            }
            return false
        }
    },
    
    methods: {
        AddCourse() {
            if (this.title && this.time) {
                this.courses.push({
                    title: this.title,
                    time: this.time
                })
                this.totalTime = parseInt(this.totalTime) + parseInt(this.time)
                this.title = ""
                this.time = null
            } else if (!this.title && !this.time) {
                this.Error = "Agrega valores válidos!"
                setTimeout(() => {
                    this.Error = null
                }, ErrorTime);
            } else if (!this.title) {
                this.TitleError = "Por favor agrega un título válido."
                setTimeout(() => {
                    this.TitleError = null
                }, ErrorTime);
            } else if (!this.time) {
                this.NumberError = "Por favor agrega una hora válida."
                setTimeout(() => {
                    this.NumberError = null
                }, ErrorTime);
            } else {
                this.Error = ""
                setTimeout(() => {
                    this.Error = null
                }, ErrorTime);
            }
        },
        ClearErrors() {
            this.TitleError = null
            this.NumberError = null
            this.Error = null
        }
    }
  })