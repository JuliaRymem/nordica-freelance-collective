import {client} from '../../frontend/src/sanityClient'

export const postTestimonial = async ({title, uploadImagefile, comment, rating, freelancerId}) => {
  const uploadAsset = await client.assets.upload('image', uploadImagefile, {
    contentType: uploadImagefile.type,
    filename: uploadImagefile.name,
  })
  return client.create({
    _type: 'testimonial',
    name: title,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: uploadAsset._id,
      },
    },
    comment: comment,
    rating: Number(rating),
    freelancer: {
      _type: 'reference',
      _ref: freelancerId,
    },
  })
}
