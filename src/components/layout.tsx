import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { Center, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image, Box, Select, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaXingSquare } from 'react-icons/fa';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';

export const siteTitle = 'Inspektionen';
/*
  <Center color="white">
                        <Link href="https://www.xing.com/profile/Georg_Braun18">Xing</Link>
                        <Link href="https://www.linkedin.com/in/georg-braun-41286b140/">Linkedin</Link>
                        <Link href="https://github.com/georg-braun">Github</Link>
                        <Link href="mailto:mail@georg-braun.de">Mail</Link>
                    </Center>

*/
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Flex wrap="wrap">
                <Flex bg="gray.800" width="100%" wrap="wrap">
                    <Image objectFit="cover" boxSize="110px" src="/images/avatar.png" alt="Georg Braun Profilbild" />

                    <Center>
                        <Heading size="md" verticalAlign="middle" color="white">
                            Georg Braun
                        </Heading>
                    </Center>
                    <Center ml="10px" mr="10px">
                        <Heading size="lg" color="white">
                            /
                        </Heading>
                    </Center>
                    <Center>
                        <Menu>
                            <MenuButton
                                as={Button}
                                size="xs"
                                mt="7px"
                                borderRadius="3px"
                                rightIcon={<ChevronDownIcon />}
                            />
                            <MenuList>
                                <MenuItem>Software</MenuItem>
                                <MenuItem>Lebenslauf</MenuItem>
                            </MenuList>
                        </Menu>
                    </Center>
                </Flex>
                <div>{children}</div>
            </Flex>
        </div>
    );
}
