const FOOTER_LIST = [
  {
    id: 1,
    title: 'Product',
    list: [
      { id: 1, listTitle: 'Cooking', path: '/products?mainCategory=cooking' },
      { id: 2, listTitle: 'Study', path: '/products?subCategory=soccer' },
      {
        id: 3,
        listTitle: 'IT',
        path: '/products?subCategory=basketball',
      },
    ],
  },
  {
    id: 2,
    title: 'Account',
    list: [
      { id: 1, listTitle: 'Login', path: '/login' },
      { id: 2, listTitle: 'Join', path: '/signup' },
      { id: 3, listTitle: 'Cart', path: '/cart' },
    ],
  },
];

export default FOOTER_LIST;
