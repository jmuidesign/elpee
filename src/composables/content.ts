import { ref } from 'vue'

const heroTitle = ref('Our vision is our product, we **make it**')
const heroText = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare pellentesque eros, ut ultrices nulla vestibulum pretium. Morbi rutrum placerat.'
)
const heroImage = ref('')

export const useContent = () => {
  const updateHeroImage = (file: Blob) => {
    const reader = new FileReader()

    reader.onload = () => {
      heroImage.value = reader.result as string
    }
    reader.readAsDataURL(file)

    console.log('test', file, heroImage.value)
  }

  return { heroTitle, heroText, heroImage, updateHeroImage }
}
