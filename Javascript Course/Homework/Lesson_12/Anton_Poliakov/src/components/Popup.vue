<template>

    <form id="make-order"
      @submit.prevent="addOrder({ item: $store.state.popup, name, email, phone })">
      <div
        class="modal fade"
        tabindex="-1"
        role="dialog"
        ref="modal"
        aria-hidden="true"
        id="order-modal">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content"
            v-if="popup.volumeInfo">
              <div class="modal-header">
                <h5 id="order-title" class="modal-title">{{ popup.volumeInfo.title }}</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  name="button">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div id="order-details" class="modal-body">
                <div class="row">
                  <div class="col-4"
                     v-if="popup.volumeInfo.imageLinks">
                    <img id="popup-thumbnail"
                         class="img-thumbnail"
                         :src="popup.volumeInfo.imageLinks.smallThumbnail">
                  </div>
                    <div class="col-8">
                      <p id="popup-description"
                         v-if="popup.searchInfo">
                          {{ popup.searchInfo.textSnippet }}
                      </p>
                      <fieldset class="form-group">
                        <input
                          id="name"
                          @blur="$v.name.$touch()"
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': $v.name.$error }"
                          name="name"
                          placeholder="Имя и фамилия"
                          v-model="name"
                          required>
                        <div class="invalid-feedback">
                          Пожалуйста, введите ваше имя
                        </div>
                      </fieldset>
                      <fieldset class="form-group">
                        <input
                          id="email"
                          @blur="$v.email.$touch()"
                          type="email"
                          class="form-control"
                          :class="{ 'is-invalid': $v.email.$error }"
                          name="email"
                          placeholder="Эл. почта"
                          v-model="email"
                          required>
                        <div class="invalid-feedback">
                          Пожалуйста, эл. почту правильно
                        </div>
                      </fieldset>
                      <fieldset id="phone" class="form-group">
                        <masked-input
                          type="tel"
                          @blur="$v.phone.$touch()"
                          class="phone form-control"
                          :class="{ 'is-invalid': $v.phone.$error }"
                          name="phone"
                          v-model="phone"
                          mask="(111)11-11-111"
                          placeholder="Телефон"
                          required
                        />
                        <div class="invalid-feedback">
                          Пожалуйста введите номер телефона
                        </div>
                      </fieldset>
                      <input id="popup-title" type="hidden" :value="popup.volumeInfo.title">
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">
                    Закрыть
                  </button>
                  <button
                    type="submit"
                    @click="hide()"
                    :disabled="$v.$invalid"
                    class="btn btn-success">
                    Отправить
                  </button>
                </div>
          </div>
        </div>
      </div>
    </form>

</template>

<script>

import { required, email } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import MaskedInput from 'vue-masked-input';
import $ from 'jquery';

export default {
  components: { MaskedInput },
  props: ['popup'],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    ...mapActions([
      'addOrder',
    ]),
    hide() {
         $('order-modal').modal('hide');
    },
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
    },
  },
};

</script>
