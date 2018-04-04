<template>
  <div>
    <h1>Demographic Page</h1>
    <form @submit.prevent="addPatient">
      <div class="row center-xs">
        <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
          <app-input v-model="fullName" type="text" name="fullname" placeholder="Full Name" />
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7 field">
          <app-input v-model="practiceName" type="text" name="practicename" placeholder="Practice Name" />
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-12 col-sm-9 col-md-6 col-lg-7">
          <app-button class="upper-button button push-right">
            Submit
          </app-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppInput from '~/components/Forms/Input'
import AppButton from '~/components/Button'

export default {
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      practiceName: '',
      fullName: ''
    }
  },
  methods: {
    async addPatient() {
      const patient = {
        fullName: this.fullName,
        practiceName: this.practiceName
      }
      const url = `${process.env.baseUrl}/patients.json?auth=${this.$store.getters.token}`
      const data = await this.$axios.$post(url, patient)
      console.log(data)
    }
  },
}
</script>
