import type { Route } from './+types/($locale)';

export async function loader({ params, context }: Route.LoaderArgs) {
  const { language, country } = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are still at the default locale
    // then the the locale param must be invalid, send to the 404 page
    throw new Response(null, { status: 404 });
  }

  return null;
}
