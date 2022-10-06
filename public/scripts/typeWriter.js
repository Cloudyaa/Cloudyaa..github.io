const typeName = (el, name) => {
  new TypeIt(el, {
    speed: 150,
    loop: true,
    delay: 0,
    cursor: false,
  })
    .type(name, { delay: 100 })
    .pause(3000)
    .delete(1, { delay: 500 })
    .delete(1, { delay: 200 })
    .delete(1, { delay: 300 })
    .delete(1, { delay: 500 })
    .delete(1, { delay: 200 })
    .delete(1, { delay: 300 })
    .pause(0)
    .go();
};

typeName('.name', 'Klaudia');
