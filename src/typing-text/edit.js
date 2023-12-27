/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import { TextControl } from "@wordpress/components";

import Inspector from "./inspector";

import { TypeAnimation } from "react-type-animation";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes, isSelected } = props;
	const { prefix, typedText, suffix, textAlign } = attributes;

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(textAlign) => setAttributes({ textAlign })}
				/>
			</BlockControls>

			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<p {...useBlockProps()}>
				<span className="sb-typed-prefix">{prefix}</span>
				<span className="sb-typed-texts"></span>

				{/* <TypeAnimation
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
				/> */}
				<span className="sb-typed-suffix">{suffix}</span>
			</p>

			{setTimeout(function () {
				new Typed(".sb-typed-texts", {
					strings: ["WordPress Expert", "Fullstack Dev", "UI/UX designer"],
					loop: true,
					typeSpeed: 50,
					backSpeed: 50,
					backDelay: 500,
					startDelay: 500,
				});
			}, 500)}
		</>
	);
}
