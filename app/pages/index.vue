<template>
  <div>
    <BasePreHeader />
    <BaseHeader />
    <HeroSection :data="data" />
    <FeatureGrid :items="data?.features || []" />
    <SupplierHighlight :data="data" />
    <HotelTrustBlock :logos="data?.hotels_logos || []" />
    <JoinCTA :data="data" />
    <FooterLegal />
  </div>
</template>

<script setup>
import BasePreHeader from '~/components/base/basePreHeader.vue'
import BaseHeader from '@/components/base/baseHeader.vue'
import HeroSection from '~/components/home/public/heroSection.vue'
import FeatureGrid from '~/components/home/public/featureGrid.vue'
import SupplierHighlight from '~/components/home/public/supplierHighlight.vue'
import HotelTrustBlock from '~/components/home/public/hotelTrustBlock.vue'
import JoinCTA from '~/components/home/public/joinCTA.vue'
import FooterLegal from '~/components/home/public/footerLegal.vue'
defineOptions({
  layout: 'default'
})

</script>
