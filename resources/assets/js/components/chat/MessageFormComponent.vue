<template>
    <b-form @submit="onSubmit">
        <b-form-group id="ChatInputGroup"
                      label="Write your message"
                      label-for="exampleInput1">
            <b-form-input id="Message"
                          type="text"
                          v-model="form.text"
                          :state="!$v.form.text.$invalid"
                          aria-describedby="MessageLive"
                          placeholder="message" />
            <b-form-invalid-feedback id="MessageLive">
                This is a required field and must be at least 1 characters
            </b-form-invalid-feedback>
        </b-form-group>
        <b-button type="submit"
                  variant="primary"
                  :disabled="$v.form.$invalid">
            Submit
        </b-button>
    </b-form>
</template>

<script>
    import { validationMixin } from "vuelidate"
    import { required, minLength } from "vuelidate/lib/validators"

    export default {
        text: "myForm",
        data() {
            return {
                form: {}
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            form: {
                text: {
                    required,
                    minLength: minLength(1)
                }
            }
        },
        methods: {
            onSubmit() {
                // form submit logic
            }
        }
    }
</script>

<!-- form-validation-1.vue -->