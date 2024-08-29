<script lang="ts">
    import { VERTICAL_LINE_ENTITY } from '$lib/constants/entities';
    import website from '$lib/config/website';
   
    const { siteLanguage, siteTitle, description } = website;
   
    export let metadescription: string = description;
    export let title: string | undefined = undefined;
   
    const pageTitle = `${siteTitle}${title ? ` ${VERTICAL_LINE_ENTITY} ${title}` : ''} `;
  </script>
  
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={metadescription} />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <!-- <html lang={siteLanguage} /> -->
  </svelte:head>