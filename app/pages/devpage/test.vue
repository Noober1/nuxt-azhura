<template>
  <div class="mt-2 flex justify-center">
    <DarkModeSwitcher />
  </div>
  <div class="flex h-screen w-full flex-col items-center justify-center gap-6">
    <Button variant="outline" size="icon-lg"> <GitBranch /> </Button>
    <div class="flex gap-6">
      <IconButton variant="default" size="sm"> <CirclePile /> </IconButton>
      <IconButton variant="secondary" size="sm"><GitBranch /></IconButton>
      <IconButton variant="destructive" size="sm"><SquareStackIcon /></IconButton>
    </div>
	<div class="flex gap-6">
      <IconButton variant="default"> <CirclePile /> </IconButton>
      <IconButton variant="secondary"><GitBranch /></IconButton>
      <IconButton variant="destructive"><SquareStackIcon /></IconButton>
    </div>
    <div class="flex gap-6">
      <IconButton variant="default" size="lg"> <CirclePile /> </IconButton>
      <IconButton variant="secondary" size="lg"><GitBranch /></IconButton>
      <IconButton variant="destructive" size="lg"><SquareStackIcon /></IconButton>
    </div>
	<div>
	<DarkModeSwitcher />
	</div>
  </div>
</template>

<script setup>
import { GitBranch, CirclePile, SquareStackIcon } from 'lucide-vue-next';
import { IconButton } from '@/components/ui/button/';
</script>

<style lang="scss" scoped></style>
