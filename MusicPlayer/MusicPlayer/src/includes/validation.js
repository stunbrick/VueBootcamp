import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, min, max, alpha_spaces as alphaSpaces, email,
    min_value as minVal, max_value as maxVal,
    not_one_of as excluded,
    confirmed
} from '@vee-validate/rules';
export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);
        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min', min);
        defineRule('max', max);
        defineRule('alpha_spaces', alphaSpaces);
        defineRule('email', email);
        defineRule('min_value', minVal);
        defineRule('max_value', maxVal);
        defineRule('passwords_mismatch', confirmed);
        defineRule('excluded', excluded);
        defineRule('country_excluded', excluded);
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required.`,
                    tos: `Must accept TOS`,
                    min: `The field ${ctx.field} is too short.`,
                    max: `The field ${ctx.field} is too long.`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
                    email: `The field ${ctx.field} must be an email..`,
                    min_value: `The field ${ctx.field} is too low.`,
                    max_value: `The field ${ctx.field} is too high.`,
                    excluded: `The value is not allowed for the field ${ctx.field}.`,
                    country_excluded: `The country is not allowed for the field ${ctx.field}.`,
                    passwords_mismatch: `${ctx.field} does not match.`,
                };

                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is required`;
                return message;
            },
        });
    },
}