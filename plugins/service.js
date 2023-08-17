import auth from '~/services/auth'
import word from '~/services/word'
import main from '~/services/main'
import profile from '~/services/profile'

export default ({ $axios }, inject) => {
  const services = {
    authService: {
      ...auth($axios),
    },
    wordService: {
      ...word($axios),
    },
    mainService: {
      ...main($axios),
    },
    profileService: {
      ...profile($axios),
    },
  }
  const methods = Object.keys(services)
  methods.forEach((name) => {
    inject(name, services[name])
  })
}
