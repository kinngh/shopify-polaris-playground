/**
 *
 * The empty function ensures when you copy UI from playground to production,
 *  the entry point doesn't break the app.
 *
 */
const isInitialLoad = async () => {
  return { props: { data: "" } };
};

export default isInitialLoad;
