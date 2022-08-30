import { createIcon } from '@chakra-ui/icons'


export const ShopBagIcon = createIcon({
  displayName: 'Profile',
  viewBox: '0 0 64 64',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587H15.31l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="currentColor" />
  ),
})
