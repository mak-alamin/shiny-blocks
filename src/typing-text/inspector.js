/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		// responsive control attributes ⬇
		resOption,
		prefix,
		typedText,
		suffix,
		prefixColor,
		typedTextColor,
		suffixTextColor,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
	} = attributes;

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes
	};

	const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};


	return (
		<InspectorControls key="controls">
			<div className="sb-panel-control">
				<TabPanel
					className="sb-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "general",
							title: __("General", "shiny-blocks"),
							className: "shiny-blocks-tab general",
						},
						{
							name: "styles",
							title: __("Style", "shiny-blocks"),
							className: "shiny-blocks-tab styles",
						},
						{
							name: "advanced",
							title: __("Advanced", "shiny-blocks"),
							className: "shiny-blocks-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"shiny-blocks-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Content Settings", "shiny-blocks")}>
							
									</PanelBody>

									<PanelBody title={__("Animation Settings", "shiny-blocks")}>
							
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<div>Styles</div>
									
									{prefix && (
										<PanelBody
											title={__("Prefix", "shiny-blocks")}
											initialOpen={false}
										>
										</PanelBody>
									)}

									{typedText.length > 0 && (
										<PanelBody
											title={__("Typed Text", "shiny-blocks")}
											initialOpen={false}
										>
											
										</PanelBody>
									)}

									{suffix && (
										<PanelBody
											title={__("Suffix", "shiny-blocks")}
											initialOpen={false}
										>	
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advanced" && (
								<>
									<div>Advanced</div>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;