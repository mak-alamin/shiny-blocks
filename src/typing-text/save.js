/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

import { TypeAnimation } from "react-type-animation";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<p {...useBlockProps.save()}>
			<span className="sb-typed-prefix">{attributes?.prefix}</span>
			<TypeAnimation
				sequence={[
					" WordPress Expert",
					1000,
					" Fullstack Developer",
					1000,
					" UI/UX Designer",
					1000,
				]}
				wrapper="span"
				speed={50}
				repeat={Infinity}
				style={{ fontSize: "20px" }}
			/>
			<span className="sb-typed-suffix">{attributes?.suffix}</span>
		</p>
	);
}
