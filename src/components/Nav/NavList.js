export const NavCategoryList = [
  { id: 1, title: '요리', path: '/lectures?category=1' },
  { id: 2, title: '입시', path: '/lectures?category=2' },
  { id: 3, title: 'IT', path: '/lectures?category=3' },
];

export const NavList = [
  {
    id: 1,
    title: '요리',
    list: [
      {
        id: 1,
        SubCategory: '한식',
        path: '/lectures?category=1&subCategory=1',
      },
      {
        id: 2,
        SubCategory: '중식',
        path: '/lectures?category=1&subCategory=2',
      },
      {
        id: 3,
        SubCategory: '양식',
        path: '/lectures?category=1&subCategory=3',
      },
    ],
  },
  {
    id: 2,
    title: '입시',
    list: [
      {
        id: 4,
        SubCategory: '국어',
        path: '/lectures?category=2&subCategory=4',
      },
      {
        id: 5,
        SubCategory: '영어',
        path: '/lectures?category=2&subCategory=5',
      },
      {
        id: 6,
        SubCategory: '수학',
        path: '/lectures?category=2&subCategory=6',
      },
    ],
  },
  {
    id: 3,
    title: 'IT',
    list: [
      { id: 7, SubCategory: 'MOS', path: '/lectures?category=3&subCategory=7' },
      {
        id: 8,
        SubCategory: '프로그래밍',
        path: '/lectures?category=3&subCategory=8',
      },
      {
        id: 9,
        SubCategory: '영상편집',
        path: '/lectures?category=3&subCategory=9',
      },
    ],
  },
];
