'use client'
import { BackgroundImage, Flex, Grid, Title } from "@mantine/core";

export default function ViewLand() {
    return <div>
        <BackgroundImage src="./images/landing.png" w={"100%"} h={"100vh"}>
            <Flex>
                <Flex>
                    <Title>Explore Tropica</Title>
                </Flex>
            </Flex>
        </BackgroundImage>

    </div>
}