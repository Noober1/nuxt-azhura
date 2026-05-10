<script setup lang="ts">
    import { ref } from 'vue'
    import { motion, useScroll, useAnimationControls, useTransform, type MotionProps } from 'motion-v'
    import HeroTitleText from './HeroTitleText.vue'

    const parentRef = ref<HTMLDivElement>()
    const { scrollYProgress } = useScroll({
        target: parentRef
    })

    const titleSubTextControls = useAnimationControls()
    const keepScrollingIndicatorControls = useAnimationControls()

    const showHideTextVariants: MotionProps['variants'] = {
        hide: {
            translateY:100,
            transition:{
                duration: 0.2
            }
        },
        show: {
            translateY:0,
            transition:{
                duration: 0.2
            }
        }
    }

    const pathLength  = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [0, 0, 0.1, 1])
    const strokeWidth = useTransform(scrollYProgress, [0, 0.75, 1], [2, 2, 0])
    const pathFill    = useTransform(scrollYProgress, [0, 0.75, 0.9, 1], [0, 0, 1, 1])
    const backgroundRotation = useTransform(scrollYProgress, [0, 1], [0, 15])
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.5, 1.7])
    const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.1])

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if (value > 0.75) {
            titleSubTextControls.start("show");
            keepScrollingIndicatorControls.start("hide");

        } else {
            titleSubTextControls.start("hide");
            keepScrollingIndicatorControls.start("show");
        }
    })

    runInDevOnly(() => {
        useMotionValueEvent(scrollYProgress, 'change', (value) => {
            devLog(value)
        })
    })

</script>

<template>
    <section ref="parentRef" class="azhura hero">
        <motion.div class="hero-container">
            <motion.div class="hero-background-wrapper">
                <motion.div class="hero-background" :style="{
                    rotate: backgroundRotation,
                    scale: backgroundScale,
                    opacity: backgroundOpacity
                }"/>
            </motion.div>
            <span class="absolute w-full h-1/4 bottom-0 bg-linear-to-b from-transparent to-background"/>
            <div class="title-wrapper">
                <div class="overflow-hidden">
                    <motion.div initial="hide" :animate="titleSubTextControls" :variants="showHideTextVariants" class="title-subtext">
                        <span class="text-destructive">Hello</span>, I am
                    </motion.div>
                </div>
                <HeroTitleText :pathLength="pathLength" :strokeWidth="strokeWidth" :pathFill="pathFill" />
                <div class="overflow-hidden">
                    <motion.div initial="hide" :animate="titleSubTextControls" :variants="showHideTextVariants" class="title-subtext text-right">
                        Welcome to my <span class="text-blue-300">website</span>
                    </motion.div>
                </div>
            </div>
            <div class="w-full text-center overflow-hidden">
                <TypographyH2 initial="show" :animate="keepScrollingIndicatorControls" :variants="showHideTextVariants" class="uppercase italic">
                    Keep scrolling
                </TypographyH2>
            </div>
        </motion.div>
    </section>
</template>

<style scoped>
    @reference "../../assets/css/main.css";
    
    .azhura.hero {
        @apply relative w-full;
        height: calc(100vh * 1.5);

        .hero-background-wrapper {
            @apply absolute top-0 w-full h-screen overflow-hidden -z-10 ;

            .hero-background {
                background-image: url(/img/hero.jpg);
                @apply bg-no-repeat bg-center bg-cover w-screen h-screen;
            }
        }
        

        .hero-container {
            @apply w-full h-full max-h-screen flex items-center justify-between sticky top-0 flex-col;
            
            .title-wrapper {
                @apply max-w-2xl h-full flex flex-col justify-center p-6 w-full overflow-hidden; 
            }
            
            .title-subtext {
                @apply block w-full px-5 font-bold text-2xl;
            }
        }
    }
</style>