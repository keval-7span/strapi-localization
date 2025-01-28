export default {
    afterCreate: async (event) => {
        const { result } = event;
        const { documentId, title, description, locale } = result;

        const locales = await strapi.documents("plugin::i18n.locale").findMany({
            fields: ["code"],
            filters: {
                code: {
                    "$ne": locale
                }
            }
        });

        for (const nested_locale of locales) {
            await strapi.documents("api::article.article").update({
                documentId,
                locale: nested_locale.code,
                data: {
                    title,
                    description
                }
            });
        }
    }
}