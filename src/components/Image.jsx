export default function Image({ folder, fileName, alt}) {
    return (
        <picture>
            <source srcSet={'/images/' + folder + '/' + fileName + '.webp'} />
            <img src={'/images/' + folder + '/' + fileName + '.jpg'} alt={alt} />
        </picture>
    )
}