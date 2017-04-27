export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return and action,
  // an object with a type property.
  return {
    // Very important to have case consistant so we stick with upercase and snake_case
    // The action itself needs to be an object with a type property
    type: 'BOOK_SELECTED',
    payload: book
  };
}
