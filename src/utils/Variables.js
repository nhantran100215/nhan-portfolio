const variables = (function () {
  const headerCollection = (function () {
    let headerRef = {};
    const get = () => {
      return headerRef;
    };
    const getId = (id) => {
      return headerRef[id];
    };
    const add = (newRef) => {
      headerRef = { ...headerRef, ...newRef };
      return headerRef;
    };
    return {
      get,
      getId,
      add
    };
  })();

  return {
    headerCollection
  };
})();

export default variables;
