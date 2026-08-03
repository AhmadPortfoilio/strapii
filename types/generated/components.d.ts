import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Per-page SEO metadata. Every field is optional \u2014 leave blank to inherit the site-wide default from Site Settings.';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    customJsonLd: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 320;
      }>;
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 320;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
    robotsFollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    robotsIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    schemaType: Schema.Attribute.String & Schema.Attribute.DefaultTo<'WebPage'>;
    seoTitle: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 320;
      }>;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
    }
  }
}
