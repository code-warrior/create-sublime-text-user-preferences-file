/*jslint browser: true, devel: true, indent: 4, maxlen: 85 */

/*
 * This variable holds an array of the <span> elements in index.php that are updated
 * when a user makes a choice for any of the available options. The default Sublime
 * option is what is initially displayed.
 *
 * Consider the `font_size` option, with its default value of `10`. In the web page,
 * it appears underneath the heading as `"font_size": 10,`. The number 10 is wrapped
 * in <span> tags referenced by this option at userChoice[2]. If a user chooses 14 as
 * the value to `font_size`, then userChoice[2] is updated below with the new value.
 */
var userChoice = document.querySelectorAll('h2+div>p:first-of-type>code>span');

var fontObject = {
        'data': [
            {
                'name': 'Andalé Mono',
                'link': 'http://sourceforge.net/projects/corefonts/?source=navbar',
                'license': 'GNU GPL version 2.0',
                'summary': 'Andalé Mono is bundled with Mac OS X, but may not be ' +
                    'included in Windows. It’s downloadable from Sourceforge.'
            },
            {
                'name': 'Anonymous Pro',
                'link': 'http://www.marksimonson.com/fonts/view/anonymous-pro',
                'license': 'SIL OFL',
                'summary': 'Released in 2009, this fixed-width font comes in two ' +
                           'variants: Anonymous Pro and Anonymous Pro Minus. ' +
                           'Anonymous Pro is more compatible with Windows, Mac, ' +
                           'and Linux, and, thus, is recommended over Anonymous ' +
                           'Pro Minus.'
            },
            {
                'name': 'Consolas',
                'link': 'http://www.fonts.com/font/microsoft-corporation/consolas',
                'license': 'Proprietary to Microsoft Corporation',
                'summary': 'Released by Microsoft and bundled with many of its ' +
                           'products, including Office and Visual Studio, ' +
                           'Consolas is a modern alternative to Courier and ' +
                           'Courier New.'
            },
            {
                'name': 'Courier',
                'link': 'http://en.wikipedia.org/wiki/Courier_%28typeface%29',
                'license': 'Royalty-free',
                'summary': 'It’s very, very likely that your computer already ' +
                           'has Courier installed.'
            },
            {
                'name': 'Courier New',
                'link':
                    'http://www.myfonts.com/fonts/mti/courier-new/licensing.html',
                'license': 'Proprietary to Monotype Corporation',
                'summary': 'Unlike Courier, its predecessor, Courier New is not ' +
                           'royalty-free. It’s commonly available in Windows and ' +
                           'Macintosh operating systems.'
            },
            {
                'name': 'Inconsolata',
                'link': 'http://www.levien.com/type/myfonts/inconsolata.html',
                'license': 'SIL OFL',
                'summary': 'Designed by a computer programmer, Ralph Levien, ' +
                           'specifically for other computer programmers, ' +
                           'Inconsalata is a favorite for many.'
            },
            {
                'name': 'Fira Mono',
                'link': 'http://www.carrois.com/fira-4-1/',
                'license': 'SIL OFL',
                'summary': 'Designed specifically for Firefox OS, Fira Mono is a ' +
                           'new, humanist, fixed-width type face and is a member ' +
                           'of the Fira Sans font family.'
            },
            {
                'name': 'Ubuntu Mono',
                'link': 'http://font.ubuntu.com/',
                'license': 'Ubuntu Font License',
                'summary': 'Just like Fira Mono was designed for an operating ' +
                           'system, so was Ubuntu Mono for the Ubuntu variant of ' +
                           'Debian Linux.'
            }
        ]
    },
    submit,
    fontFaceInputBox,
    div,
    firstParagraph,
    introduction,
    styleSheet,
    button,
    colorSchemeOption,
    fontFaceOption,
    fontSizeOption,
    fontOptionsOption,
    wordSeparatorsOption,
    lineNumbersOption,
    gutterOption,
    marginOption,
    foldButtonsOption,
    fadeFoldButtonsOption,
    rulersOption,
    spellCheckOption,
    tabSizeOption,
    translateTabsToSpacesOption,
    useTabStopsOption,
    detectIndentationOption,
    autoIndentOption,
    trimAutomaticWhiteSpaceOption,
    wordWrapOption,
    wrapWidthOption,
    drawCenteredOption,
    dictionaryOption,
    drawMinimapBorderOption,
    alwaysShowMinimapViewportOption,
    highlightLineOption,
    caretStyleOption,
    scrollPastEndOption,
    drawWhiteSpaceOption,
    trimTrailingWhiteSpaceOnSaveOption,
    ensureNewlineAtEOFOnSaveOption,
    saveOnFocusLostOption,
    defaultLineEndingOption,
    copyWithEmptySelectionOption,
    dragTextOption,
    treeAnimationEnabledOption,
    animationEnabledOption,
    highlightModifiedTabsOption,
    overlayScrollBarsOption,
    showEncodingOption,
    showLineEndingsOption,
    hotExitOption,

    alwaysPromptForFileReloadOption,
    userChoiceForAlwaysPromptForFileReloadDisplayedInSpan,
    openFilesInNewWindowOption,
    userChoiceForOpenFilesInNewWindowDisplayedInSpan,
    createWindowAtStartupOption,
    userChoiceForCreateWindowAtStartupDisplayedInSpan,
    showFullPathOption,
    userChoiceForShowFullPathDisplayedInSpan,
    previewOnClickOption,
    userChoiceForPreviewOnClickDisplayedInSpan;

function displayFontFaceInfo() {
    'use strict';

    var fontFaceChoice = fontFaceInputBox.value.toLowerCase(),
        index = -1;

    switch (fontFaceChoice) {
    case 'andalé mono':
        index = 0;
        break;

    case 'anonymous pro':
        index = 1;
        break;

    case 'consolas':
        index = 2;
        break;

    case 'courier':
        index = 3;
        break;

    case 'courier new':
        index = 4;
        break;

    case 'inconsolata':
        index = 5;
        break;

    case 'fira mono':
        index = 6;
        break;

    case 'ubuntu mono':
        index = 7;
        break;
    }

    if (-1 !== index) {
        setTimeout(function () {div.setAttribute('class', 'transition'); }, 300);

        firstParagraph.innerHTML =
            (fontObject.data[index].summary + ' More info <a title="License: ' +
             fontObject.data[index].license + '" href="' +
             fontObject.data[index].link + '">here</a>.');
    }
}

function hideIntroduction() {
    'use strict';

    introduction.className = 'hide';
}

function updateContentInSpan() {
    'use strict';

    var input;

    switch (this.id) {
    case 'color_scheme_option':
        userChoice[0].textContent = colorSchemeOption.value;

        if ('' === colorSchemeOption.value) {
            userChoice[0].textContent = 'Monokai.tmTheme';
        }

        break;

    case 'font_face_option':
        userChoice[1].textContent = fontFaceOption.value;

        if ('' === fontFaceOption.value) {
            userChoice[1].textContent = '';
        }

        break;

    case 'font_size_option':
        if ('' === fontSizeOption.value) {
            submit.removeAttribute('disabled');
            userChoice[2].textContent = '10';
        } else {
            input = parseInt(fontSizeOption.value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[2].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[2].textContent = fontSizeOption.value;
            }
        }

        break;

    case 'font_options_option':
        userChoice[3].textContent =
            ('' === fontOptionsOption.value) ? ' ' : fontOptionsOption.value;

        break;

    case 'word_separators_option':
        userChoice[4].textContent = wordSeparatorsOption.value;

        break;

    case 'line_numbers_option':
        userChoice[5].textContent = lineNumbersOption.value;

        break;

    case 'gutter_option':
        userChoice[6].textContent = gutterOption.value;

        break;

    case 'margin_option':
        if ('' === marginOption.value) {
            submit.removeAttribute('disabled');
            userChoice[7].textContent = '4';
        } else {
            input = parseInt(marginOption.value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[7].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[7].textContent = marginOption.value;
            }
        }

        break;

    case 'fold_buttons_option':
        userChoice[8].textContent = foldButtonsOption.value;

        break;

    case 'fade_fold_buttons_option':
        userChoice[9].textContent = fadeFoldButtonsOption.value;

        break;

    case 'rulers_option':
        userChoice[10].textContent = rulersOption.value;

        break;

    case 'spell_check_option':
        userChoice[11].textContent = spellCheckOption.value;

        break;

    case 'tab_size_option':
        if ('' === tabSizeOption.value) {
            submit.removeAttribute('disabled');

            userChoice[12].textContent = '4';
        } else {
            input = parseInt(tabSizeOption.value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[12].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');

                userChoice[12].textContent = tabSizeOption.value;
            }
        }

        break;

    case 'translate_tabs_to_spaces_option':
        userChoice[13].textContent = translateTabsToSpacesOption.value;

        break;

    case 'use_tab_stops_option':
        userChoice[14].textContent = useTabStopsOption.value;

        break;

    case 'detect_indentation_option':
        userChoice[15].textContent = detectIndentationOption.value;

        break;

    case 'auto_indent_option':
        userChoice[16].textContent = autoIndentOption.value;

        break;

    case 'trim_automatic_white_space_option':
        userChoice[17].textContent = trimAutomaticWhiteSpaceOption.value;

        break;

    case 'word_wrap_option':
        userChoice[18].textContent = wordWrapOption.value;

        break;

    case 'wrap_width_option':
        if ('' === wrapWidthOption.value) {
            submit.removeAttribute('disabled');
            userChoice[19].textContent = '0';
        } else {
            input = parseInt(wrapWidthOption.value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[19].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[19].textContent = wrapWidthOption.value;
            }
        }

        break;

    case 'draw_centered_option':
        userChoice[20].textContent = drawCenteredOption.value;

        break;

    case 'dictionary_option':
        userChoice[21].textContent = dictionaryOption.value;

        break;

    case 'draw_minimap_border_option':
        userChoice[22].textContent = drawMinimapBorderOption.value;

        break;

    case 'always_show_minimap_viewport_option':
        userChoice[23].textContent = alwaysShowMinimapViewportOption.value;

        break;

    case 'highlight_line_option':
        userChoice[24].textContent = highlightLineOption.value;

        break;

    case 'caret_style_option':
        userChoice[25].textContent = caretStyleOption.value;

        break;

    case 'scroll_past_end_option':
        userChoice[26].textContent = scrollPastEndOption.value;

        break;

    case 'draw_white_space_option':
        userChoice[27].textContent = drawWhiteSpaceOption.value;

        break;

    case 'trim_trailing_white_space_on_save_option':
        userChoice[28].textContent =
            trimTrailingWhiteSpaceOnSaveOption.value;

        break;

    case 'ensure_newline_at_eof_on_save_option':
        userChoice[29].textContent = ensureNewlineAtEOFOnSaveOption.value;

        break;

    case 'save_on_focus_lost_option':
        userChoice[30].textContent = saveOnFocusLostOption.value;

        break;

    case 'default_line_ending_option':
        userChoice[31].textContent = defaultLineEndingOption.value;

        break;

    case 'copy_with_empty_selection_option':
        userChoice[32].textContent = copyWithEmptySelectionOption.value;

        break;

    case 'drag_text_option':
        userChoice[33].textContent = dragTextOption.value;

        break;

    case 'tree_animation_enabled_option':
        userChoice[34].textContent = treeAnimationEnabledOption.value;

        break;

    case 'animation_enabled_option':
        userChoice[35].textContent = animationEnabledOption.value;

        break;

    case 'highlight_modified_tabs_option':
        userChoice[36].textContent = highlightModifiedTabsOption.value;

        break;

    case 'overlay_scroll_bars_option':
        userChoice[37].textContent = overlayScrollBarsOption.value;

        break;

    case 'show_encoding_option':
        userChoice[38].textContent = showEncodingOption.value;

        break;

    case 'show_line_endings_option':
        userChoice[39].textContent = showLineEndingsOption.value;

        break;

    case 'hot_exit_option':
        userChoice[40].textContent = hotExitOption.value;

        break;
    }
}

function updateContentInSpanForAlwaysPromptForFileReload() {
    'use strict';

    userChoiceForAlwaysPromptForFileReloadDisplayedInSpan.textContent =
        alwaysPromptForFileReloadOption.value;
}

function updateContentInSpanForOpenFilesInNewWindow() {
    'use strict';

    userChoiceForOpenFilesInNewWindowDisplayedInSpan.textContent =
        openFilesInNewWindowOption.value;
}

function updateContentInSpanForCreateWindowAtStartup() {
    'use strict';

    userChoiceForCreateWindowAtStartupDisplayedInSpan.textContent =
        createWindowAtStartupOption.value;
}

function updateContentInSpanForShowFullPath() {
    'use strict';

    userChoiceForShowFullPathDisplayedInSpan.textContent =
        showFullPathOption.value;
}

function updateContentInSpanForPreviewOnClick() {
    'use strict';

    userChoiceForPreviewOnClickDisplayedInSpan.textContent =
        previewOnClickOption.value;
}

window.onload = function () {
    'use strict';

    submit = document.getElementById('submit');

    fontFaceInputBox =  document.getElementById('font_face_option');
    fontFaceInputBox.addEventListener('input', displayFontFaceInfo, false);
    div = document.querySelector('#font_face>h2+div>div');
    firstParagraph = div.getElementsByTagName('p')[0];

    introduction = document.getElementById('introduction');
    styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
        '#introduction { height: ' + introduction.clientHeight + 'px; }',
        3
    );
    button = document.getElementsByTagName('button')[0];
    button.addEventListener(
        'click',
        hideIntroduction,
        false
    );

    // COLOR SCHEME
    colorSchemeOption = document.getElementById('color_scheme_option');
    colorSchemeOption.addEventListener('input', updateContentInSpan, false);
    userChoice[0].textContent = colorSchemeOption.value;

    // FONT FACE
    fontFaceOption = document.getElementById('font_face_option');
    fontFaceOption.addEventListener('input', updateContentInSpan, false);
    userChoice[1].textContent = fontFaceOption.value;

    // FONT SIZE
    fontSizeOption = document.getElementById('font_size_option');
    fontSizeOption.addEventListener('input', updateContentInSpan, false);
    userChoice[2].textContent = fontSizeOption.value;

    // FONT OPTIONS
    fontOptionsOption = document.getElementById('font_options_option');
    fontOptionsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[3].textContent = fontOptionsOption.value;

    // WORD SEPARATORS
    wordSeparatorsOption = document.getElementById('word_separators_option');
    wordSeparatorsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[4].textContent = wordSeparatorsOption.value;

    // LINE NUMBERS
    lineNumbersOption = document.getElementById('line_numbers_option');
    lineNumbersOption.addEventListener('change', updateContentInSpan, false);
    userChoice[5].textContent = lineNumbersOption.value;

    // GUTTER
    gutterOption = document.getElementById('gutter_option');
    gutterOption.addEventListener('change', updateContentInSpan, false);
    userChoice[6].textContent = gutterOption.value;

    // MARGIN
    marginOption = document.getElementById('margin_option');
    marginOption.addEventListener('input', updateContentInSpan, false);
    userChoice[7].textContent = marginOption.value;

    // FOLD BUTTONS
    foldButtonsOption = document.getElementById('fold_buttons_option');
    foldButtonsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[8].textContent = foldButtonsOption.value;

    // FADE FOLD BUTTONS
    fadeFoldButtonsOption = document.getElementById('fade_fold_buttons_option');
    fadeFoldButtonsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[9].textContent = fadeFoldButtonsOption.value;

    // RULERS
    rulersOption = document.getElementById('rulers_option');
    rulersOption.addEventListener('change', updateContentInSpan, false);
    userChoice[10].textContent = rulersOption.value;

    // SPELL CHECK
    spellCheckOption = document.getElementById('spell_check_option');
    spellCheckOption.addEventListener('change', updateContentInSpan, false);
    userChoice[11].textContent = spellCheckOption.value;

    // TAB SIZE
    tabSizeOption = document.getElementById('tab_size_option');
    tabSizeOption.addEventListener('input', updateContentInSpan, false);
    userChoice[12].textContent = tabSizeOption.value;

    // TRANSLATE TABS TO SPACES
    translateTabsToSpacesOption = document.getElementById(
        'translate_tabs_to_spaces_option'
    );
    translateTabsToSpacesOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[13].textContent = translateTabsToSpacesOption.value;

    // USE TAB STOPS
    useTabStopsOption = document.getElementById('use_tab_stops_option');
    useTabStopsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[14].textContent = useTabStopsOption.value;

    // DETECT INDENTATION
    detectIndentationOption = document.getElementById('detect_indentation_option');
    detectIndentationOption.addEventListener('change', updateContentInSpan, false);
    userChoice[15].textContent = detectIndentationOption.value;

    // AUTO INDENT
    autoIndentOption = document.getElementById('auto_indent_option');
    autoIndentOption.addEventListener('change', updateContentInSpan, false);
    userChoice[16].textContent = autoIndentOption.value;

    // TRIM AUTOMATIC WHITE SPACE
    trimAutomaticWhiteSpaceOption =
        document.getElementById('trim_automatic_white_space_option');
    trimAutomaticWhiteSpaceOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[17].textContent = trimAutomaticWhiteSpaceOption.value;

    // WORD WRAP
    wordWrapOption = document.getElementById('word_wrap_option');
    wordWrapOption.addEventListener('change', updateContentInSpan, false);
    userChoice[18].textContent = wordWrapOption.value;

    // WRAP WIDTH
    wrapWidthOption = document.getElementById('wrap_width_option');
    wrapWidthOption.addEventListener('input', updateContentInSpan, false);
    userChoice[19].textContent = wrapWidthOption.value;

    // DRAW CENTERED
    drawCenteredOption = document.getElementById('draw_centered_option');
    drawCenteredOption.addEventListener('change', updateContentInSpan, false);
    userChoice[20].textContent = drawCenteredOption.value;

    // DICTIONARY
    dictionaryOption = document.getElementById('dictionary_option');
    dictionaryOption.addEventListener('change', updateContentInSpan, false);
    userChoice[21].textContent = dictionaryOption.value;

    // DRAW MINIMAP BORDER
    drawMinimapBorderOption = document.getElementById('draw_minimap_border_option');
    drawMinimapBorderOption.addEventListener('change', updateContentInSpan, false);
    userChoice[22].textContent = drawMinimapBorderOption.value;

    // ALWAYS SHOW MINIMAP VIEWPORT
    alwaysShowMinimapViewportOption =
        document.getElementById('always_show_minimap_viewport_option');
    alwaysShowMinimapViewportOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[23].textContent = alwaysShowMinimapViewportOption.value;

    // HIGHLIGHT LINE
    highlightLineOption = document.getElementById('highlight_line_option');
    highlightLineOption.addEventListener('change', updateContentInSpan, false);
    userChoice[24].textContent = highlightLineOption.value;

    // CARET STYLE
    caretStyleOption = document.getElementById('caret_style_option');
    caretStyleOption.addEventListener('change', updateContentInSpan, false);
    userChoice[25].textContent = caretStyleOption.value;

    // SCROLL PAST END
    scrollPastEndOption = document.getElementById('scroll_past_end_option');
    scrollPastEndOption.addEventListener('change', updateContentInSpan, false);
    userChoice[26].textContent = scrollPastEndOption.value;

    // DRAW WHITE SPACE
    drawWhiteSpaceOption = document.getElementById('draw_white_space_option');
    drawWhiteSpaceOption.addEventListener('change', updateContentInSpan, false);
    userChoice[27].textContent = drawWhiteSpaceOption.value;

    // TRIM TRAILING WHITE SPACE ON SAVE
    trimTrailingWhiteSpaceOnSaveOption =
        document.getElementById('trim_trailing_white_space_on_save_option');
    trimTrailingWhiteSpaceOnSaveOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[28].textContent = trimTrailingWhiteSpaceOnSaveOption.value;

    // ENSURE NEWLINE AT EOF ON SAVE
    ensureNewlineAtEOFOnSaveOption =
        document.getElementById('ensure_newline_at_eof_on_save_option');
    ensureNewlineAtEOFOnSaveOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[29].textContent = ensureNewlineAtEOFOnSaveOption.value;

    // SAVE ON FOCUS LOST
    saveOnFocusLostOption = document.getElementById('save_on_focus_lost_option');
    saveOnFocusLostOption.addEventListener('change', updateContentInSpan, false);
    userChoice[30].textContent = saveOnFocusLostOption.value;

    // DEFAULT LINE ENDING
    defaultLineEndingOption = document.getElementById('default_line_ending_option');
    defaultLineEndingOption.addEventListener('change', updateContentInSpan, false);
    userChoice[31].textContent = defaultLineEndingOption.value;

    // COPY WITH EMPTY SELECTION
    copyWithEmptySelectionOption =
        document.getElementById('copy_with_empty_selection_option');
    copyWithEmptySelectionOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[32].textContent = copyWithEmptySelectionOption.value;

    // DRAG TEXT
    dragTextOption = document.getElementById('drag_text_option');
    dragTextOption.addEventListener('change', updateContentInSpan, false);
    userChoice[33].textContent = dragTextOption.value;

    // TREE ANIMATION ENABLED
    treeAnimationEnabledOption =
        document.getElementById('tree_animation_enabled_option');
    treeAnimationEnabledOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[34].textContent = treeAnimationEnabledOption.value;

    // ANIMATION ENABLED
    animationEnabledOption = document.getElementById('animation_enabled_option');
    animationEnabledOption.addEventListener('change', updateContentInSpan, false);
    userChoice[35].textContent = animationEnabledOption.value;

    // HIGHLIGHT MODIFIED TABS
    highlightModifiedTabsOption =
        document.getElementById('highlight_modified_tabs_option');
    highlightModifiedTabsOption.addEventListener(
        'change',
        updateContentInSpan,
        false
    );
    userChoice[36].textContent = highlightModifiedTabsOption.value;

    // OVERLAY SCROLL BARS
    overlayScrollBarsOption = document.getElementById('overlay_scroll_bars_option');
    overlayScrollBarsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[37].textContent = overlayScrollBarsOption.value;

    // SHOW ENCODING
    showEncodingOption = document.getElementById('show_encoding_option');
    showEncodingOption.addEventListener('change', updateContentInSpan, false);
    userChoice[38].textContent = showEncodingOption.value;

    // SHOW LINE ENDINGS
    showLineEndingsOption = document.getElementById('show_line_endings_option');
    showLineEndingsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[39].textContent = showLineEndingsOption.value;

    // HOT EXIT
    hotExitOption = document.getElementById('hot_exit_option');
    hotExitOption.addEventListener('change', updateContentInSpan, false);
    userChoice[40].textContent = hotExitOption.value;

    /**
     * ALWAYS PROMPT FOR FILE RELOAD
     */
    userChoiceForAlwaysPromptForFileReloadDisplayedInSpan =
        document.querySelector(
            '#always_prompt_for_file_reload>h2+div>p:first-of-type>code>span'
        );
    alwaysPromptForFileReloadOption =
        document.getElementById('always_prompt_for_file_reload_option');
    alwaysPromptForFileReloadOption.addEventListener(
        'change',
        updateContentInSpanForAlwaysPromptForFileReload,
        false
    );
    userChoiceForAlwaysPromptForFileReloadDisplayedInSpan.textContent =
        alwaysPromptForFileReloadOption.value;

    /**
     * OPEN FILES IN NEW WINDOW
     */
    userChoiceForOpenFilesInNewWindowDisplayedInSpan =
        document.querySelector(
            '#open_files_in_new_window>h2+div>p:first-of-type>code>span'
        );
    openFilesInNewWindowOption =
        document.getElementById('open_files_in_new_window_option');
    openFilesInNewWindowOption.addEventListener(
        'change',
        updateContentInSpanForOpenFilesInNewWindow,
        false
    );
    userChoiceForOpenFilesInNewWindowDisplayedInSpan.textContent =
        openFilesInNewWindowOption.value;

    /**
     * CREATE WINDOW AT STARTUP
     */
    userChoiceForCreateWindowAtStartupDisplayedInSpan =
        document.querySelector(
            '#create_window_at_startup>h2+div>p:first-of-type>code>span'
        );
    createWindowAtStartupOption =
        document.getElementById('create_window_at_startup_option');
    createWindowAtStartupOption.addEventListener(
        'change',
        updateContentInSpanForCreateWindowAtStartup,
        false
    );
    userChoiceForCreateWindowAtStartupDisplayedInSpan.textContent =
        createWindowAtStartupOption.value;

    /**
     * SHOW FULL PATH
     */
    userChoiceForShowFullPathDisplayedInSpan =
        document.querySelector(
            '#show_full_path>h2+div>p:first-of-type>code>span'
        );
    showFullPathOption = document.getElementById('show_full_path_option');
    showFullPathOption.addEventListener(
        'change',
        updateContentInSpanForShowFullPath,
        false
    );
    userChoiceForShowFullPathDisplayedInSpan.textContent =
        showFullPathOption.value;

    /**
     * PREVIEW ON CLICK
     */
    userChoiceForPreviewOnClickDisplayedInSpan =
        document.querySelector(
            '#preview_on_click>h2+div>p:first-of-type>code>span'
        );
    previewOnClickOption = document.getElementById('preview_on_click_option');
    previewOnClickOption.addEventListener(
        'change',
        updateContentInSpanForPreviewOnClick,
        false
    );
    userChoiceForPreviewOnClickDisplayedInSpan.textContent =
        previewOnClickOption.value;
};
