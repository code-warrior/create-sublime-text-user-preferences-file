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
    fontSize,
    fontOptionsOption,
    wordSeparatorsOption,
    lineNumbersOption,
    gutterOption,
    marginOption,
    foldButtonsOption,
    fadeFoldButtonsOption,
    rulersOption,
    spellCheckOption,
    userChoiceForTabSizeDisplayedInSpan,
    tabSizeOption,
    userChoiceForTranslateTabsToSpacesDisplayedInSpan,
    translateTabsToSpacesOption,
    userChoiceForUseTabStopsInSpan,
    useTabStopsOption,
    userChoiceForAutoIndentDisplayedInSpan,
    autoIndentOption,
    userChoiceForDetectIndentationInSpan,
    detectIndentationOption,
    userChoiceForTrimAutomaticWhiteSpaceDisplayedInSpan,
    trimAutomaticWhiteSpaceOption,
    userChoiceForWordWrapDisplayedInSpan,
    wordWrapOption,
    wrapWidthOption,
    userChoiceForWrapWidthDisplayedInSpan,
    drawCenteredOption,
    userChoiceForDrawCenteredDisplayedInSpan,
    dictionaryOption,
    userChoiceForDictionaryDisplayedInSpan,
    drawMinimapBorderOption,
    userChoiceForDrawMinimapBorderDisplayedInSpan,
    alwaysShowMinimapViewportOption,
    userChoiceForAlwaysShowMinimapViewportDisplayedInSpan,
    highlightLineOption,
    userChoiceForHighlightLineDisplayedInSpan,
    caretStyleOption,
    userChoiceForCaretStyleDisplayedInSpan,
    scrollPastEndOption,
    userChoiceForScrollPastEndDisplayedInSpan,
    drawWhiteSpaceOption,
    userChoiceForDrawWhiteSpaceDisplayedInSpan,
    trimTrailingWhiteSpaceOnSaveOption,
    userChoiceForTrimTrailingWhiteSpaceOnSaveDisplayedInSpan,
    ensureNewlineAtEOFOnSaveOption,
    userChoiceForEnsureNewlineAtEOFOnSaveDisplayedInSpan,
    saveOnFocusLostOption,
    userChoiceForSaveOnFocusLostDisplayedInSpan,
    defaultLineEndingOption,
    userChoiceForDefaultLineEndingDisplayedInSpan,
    copyWithEmptySelectionOption,
    userChoiceForCopyWithEmptySelectionDisplayedInSpan,
    dragTextOption,
    userChoiceForDragTextDisplayedInSpan,
    treeAnimationEnabledOption,
    userChoiceForTreeAnimationEnabledDisplayedInSpan,
    animationEnabledOption,
    userChoiceForAnimationEnabledDisplayedInSpan,
    highlightModifiedTabsOption,
    userChoiceForHighlightModifiedTabsDisplayedInSpan,
    overlayScrollBarsOption,
    userChoiceForOverlayScrollBarsDisplayInSpan,
    showEncodingOption,
    userChoiceForShowEncodingDisplayedInSpan,
    showLineEndingsOption,
    userChoiceForShowLineEndingsDisplayedInSpan,
    hotExitOption,
    userChoiceForHotExitDisplayedInSpan,
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

    if (index !== -1) {
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
        var input;

        if ('' === fontSize.value) {
            submit.removeAttribute('disabled');
            userChoice[2].textContent = '10';
        } else {
            input = parseInt(fontSize.value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[2].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[2].textContent = fontSize.value;
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
    }
}

function updateContentInSpanForWrapWidth() {
    'use strict';

    var input;

    if ('' === wrapWidthOption.value) {
        submit.removeAttribute('disabled');
        userChoiceForWrapWidthDisplayedInSpan.textContent = '0';
    } else {

        input = parseInt(wrapWidthOption.value, 10);

        if (isNaN(input)) {
            submit.setAttribute('disabled', 'disabled');

            userChoiceForWrapWidthDisplayedInSpan.innerHTML =
                '<span class="error">That is not a number. ' +
                'Submission is disabled</span>';
        } else {
            submit.removeAttribute('disabled');
            userChoiceForWrapWidthDisplayedInSpan.textContent =
                wrapWidthOption.value;
        }
    }
}

function updateLineNumbersOptionInSpan() {
    'use strict';

    userChoice[5].textContent = lineNumbersOption.value;
}

function updateGutterOptionInSpan() {
    'use strict';

    userChoice[6].textContent = gutterOption.value;
}

function updateUserChoiceForMarginOptionInSpan() {
    'use strict';

    var input;

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
}

function updateFoldButtonsOptionInSpan() {
    'use strict';

    userChoice[8].textContent = foldButtonsOption.value;
}

function updateInSpanFadeFoldButtonsOption() {
    'use strict';

    userChoice[9].textContent = fadeFoldButtonsOption.value;
}

function updateContentInSpanforRulers() {
    'use strict';

    userChoice[10].textContent = rulersOption.value;
}

function updateUserChoiceForSpellCheckOptionDisplayedInSpan() {
    'use strict';

    userChoice[11].textContent = spellCheckOption.value;
}

function updateUserChoiceForTabSizeOptionDisplayedInSpan() {
    'use strict';

    var input;

    if ('' === tabSizeOption.value) {
        submit.removeAttribute('disabled');

        userChoiceForTabSizeDisplayedInSpan.textContent = '4';
    } else {

        input = parseInt(tabSizeOption.value, 10);

        if (isNaN(input)) {
            submit.setAttribute('disabled', 'disabled');

            userChoiceForTabSizeDisplayedInSpan.innerHTML =
                '<span class="error">That is not a number. ' +
                'Submission is disabled</span>';
        } else {
            submit.removeAttribute('disabled');

            userChoiceForTabSizeDisplayedInSpan.textContent =
                tabSizeOption.value;
        }
    }
}

function updateTranslateTabsToSpaces() {
    'use strict';

    userChoiceForTranslateTabsToSpacesDisplayedInSpan.textContent =
        translateTabsToSpacesOption.value;
}

function updateUseTabStopsOption() {
    'use strict';

    userChoiceForUseTabStopsInSpan.textContent = useTabStopsOption.value;
}

function updateContentInSpanForAutoIndentOption() {
    'use strict';

    userChoiceForAutoIndentDisplayedInSpan.textContent =
        autoIndentOption.value;
}

function updateDetectIndentationOption() {
    'use strict';

    userChoiceForDetectIndentationInSpan.textContent = detectIndentationOption.value;
}

function updateContentInSpanForTrimAutomaticWhiteSpace() {
    'use strict';

    userChoiceForTrimAutomaticWhiteSpaceDisplayedInSpan.textContent =
        trimAutomaticWhiteSpaceOption.value;
}

function updateContentInSpanForWordWrap() {
    'use strict';

    userChoiceForWordWrapDisplayedInSpan.textContent =
        wordWrapOption.value;
}

function updateContentInSpanForDrawCentered() {
    'use strict';

    userChoiceForDrawCenteredDisplayedInSpan.textContent =
        drawCenteredOption.value;
}

function updateContentInSpanForDictionary() {
    'use strict';

    userChoiceForDictionaryDisplayedInSpan.textContent =
        dictionaryOption.value;
}

function updateContentInSpanForDrawMinimapBorder() {
    'use strict';

    userChoiceForDrawMinimapBorderDisplayedInSpan.textContent =
        drawMinimapBorderOption.value;
}

function updateContentInSpanForAlwaysShowMinimapViewport() {
    'use strict';

    userChoiceForAlwaysShowMinimapViewportDisplayedInSpan.textContent =
        alwaysShowMinimapViewportOption.value;
}

function updateContentInSpanForHighlightLine() {
    'use strict';

    userChoiceForHighlightLineDisplayedInSpan.textContent =
        highlightLineOption.value;
}

function updateContentInSpanForCaretStyleOption() {
    'use strict';

    userChoiceForCaretStyleDisplayedInSpan.textContent =
        caretStyleOption.value;
}

function updateContentInSpanForScrollPastEnd() {
    'use strict';

    userChoiceForScrollPastEndDisplayedInSpan.textContent =
        scrollPastEndOption.value;
}

function updateContentInSpanForDrawWhiteSpace() {
    'use strict';

    userChoiceForDrawWhiteSpaceDisplayedInSpan.textContent =
        drawWhiteSpaceOption.value;
}

function updateContentInSpanForTrimTrailingWhiteSpace() {
    'use strict';

    userChoiceForTrimTrailingWhiteSpaceOnSaveDisplayedInSpan.textContent =
        trimTrailingWhiteSpaceOnSaveOption.value;
}

function updateContentInSpanForEnsureNewlineAtEOFOnSave() {
    'use strict';

    userChoiceForEnsureNewlineAtEOFOnSaveDisplayedInSpan.textContent =
        ensureNewlineAtEOFOnSaveOption.value;
}

function updateContentInSpanForSaveOnFocusLost() {
    'use strict';

    userChoiceForSaveOnFocusLostDisplayedInSpan.textContent =
        saveOnFocusLostOption.value;
}

function updateContentInSpanForDefaultLineEnding() {
    'use strict';

    userChoiceForDefaultLineEndingDisplayedInSpan.textContent =
        defaultLineEndingOption.value;
}

function updateContentInSpanForCopyWithEmptySelection() {
    'use strict';

    userChoiceForCopyWithEmptySelectionDisplayedInSpan.textContent =
        copyWithEmptySelectionOption.value;
}

function updateContentInSpanForDragText() {
    'use strict';

    userChoiceForDragTextDisplayedInSpan.textContent = dragTextOption.value;
}

function updateContentInSpanForTreeAnimationEnabled() {
    'use strict';

    userChoiceForTreeAnimationEnabledDisplayedInSpan.textContent =
        treeAnimationEnabledOption.value;
}

function updateContentInSpanForAnimationEnabled() {
    'use strict';

    userChoiceForAnimationEnabledDisplayedInSpan.textContent =
        animationEnabledOption.value;
}

function updateContentInSpanForHighlightModifiedTabs() {
    'use strict';

    userChoiceForHighlightModifiedTabsDisplayedInSpan.textContent =
        highlightModifiedTabsOption.value;
}

function updateContentInSpanForOverlayScrollBars() {
    'use strict';

    userChoiceForOverlayScrollBarsDisplayInSpan.textContent =
        overlayScrollBarsOption.value;
}

function updateContentInSpanForShowEncoding() {
    'use strict';

    userChoiceForShowEncodingDisplayedInSpan.textContent =
        showEncodingOption.value;
}

function updateContentInSpanForShowLineEndings() {
    'use strict';

    userChoiceForShowLineEndingsDisplayedInSpan.textContent =
        showLineEndingsOption.value;
}

function updateContentInSpanForHotExit() {
    'use strict';

    userChoiceForHotExitDisplayedInSpan.textContent =
        hotExitOption.value;
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

    /**
     * COLOR SCHEME
     */
    colorSchemeOption = document.getElementById('color_scheme_option');
    colorSchemeOption.addEventListener('input', updateContentInSpan, false);
    userChoice[0].textContent = colorSchemeOption.value;

    /**
     * FONT FACE
     */
    fontFaceOption = document.getElementById('font_face_option');
    fontFaceOption.addEventListener('input', updateContentInSpan, false);
    userChoice[1].textContent = fontFaceOption.value;

    /**
     * FONT SIZE
     */
    fontSize = document.getElementById('font_size_option');
    fontSize.addEventListener('input', updateContentInSpan, false);
    userChoice[2].textContent = fontSize.value;

    /**
     * FONT OPTIONS
     */
    fontOptionsOption = document.getElementById('font_options_option');
    fontOptionsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[3].textContent = fontOptionsOption.value;

    /**
     * WORD SEPARATORS
     */
    wordSeparatorsOption = document.getElementById('word_separators_option');
    wordSeparatorsOption.addEventListener('change', updateContentInSpan, false);
    userChoice[4].textContent = wordSeparatorsOption.value;

    /**
     * LINE NUMBERS
     */
    lineNumbersOption = document.getElementById('line_numbers_option');
    lineNumbersOption.addEventListener(
        'change',
        updateLineNumbersOptionInSpan,
        false
    );
    userChoice[5].textContent = lineNumbersOption.value;

    /**
     * GUTTER
     */
    gutterOption = document.getElementById('gutter_option');
    gutterOption.addEventListener(
        'change',
        updateGutterOptionInSpan,
        false
    );
    userChoice[6].textContent = gutterOption.value;

    /**
     * MARGIN
     */
    marginOption = document.getElementById('margin_option');
    marginOption.addEventListener(
        'input',
        updateUserChoiceForMarginOptionInSpan,
        false
    );
    userChoice[7].textContent = marginOption.value;

    /**
     * FOLD BUTTONS
     */
    foldButtonsOption = document.getElementById('fold_buttons_option');
    foldButtonsOption.addEventListener(
        'change',
        updateFoldButtonsOptionInSpan,
        false
    );
    userChoice[8].textContent = foldButtonsOption.value;

    /**
     * FADE FOLD BUTTONS
     */
    fadeFoldButtonsOption =
        document.getElementById('fade_fold_buttons_option');
    fadeFoldButtonsOption.addEventListener(
        'change',
        updateInSpanFadeFoldButtonsOption,
        false
    );
    userChoice[9].textContent = fadeFoldButtonsOption.value;

    /**
     * RULERS
     */
    rulersOption = document.getElementById('rulers_option');
    rulersOption.addEventListener(
        'change',
        updateContentInSpanforRulers,
        false
    );
    userChoice[10].textContent = rulersOption.value;

    /**
     * SPELL CHECK
     */
    spellCheckOption = document.getElementById('spell_check_option');
    spellCheckOption.addEventListener(
        'change',
        updateUserChoiceForSpellCheckOptionDisplayedInSpan,
        false
    );
    userChoice[11].textContent = spellCheckOption.value;

    /**
     * TAB SIZE
     */
    userChoiceForTabSizeDisplayedInSpan = document.querySelector(
        '#tab_size>h2+div>p:first-of-type>code>span'
    );
    tabSizeOption = document.getElementById('tab_size_option');
    tabSizeOption.addEventListener(
        'input',
        updateUserChoiceForTabSizeOptionDisplayedInSpan,
        false
    );
    userChoiceForTabSizeDisplayedInSpan.textContent = tabSizeOption.value;

    /**
     * TRANSLATE TABS TO SPACES
     */
    userChoiceForTranslateTabsToSpacesDisplayedInSpan = document.querySelector(
        '#translate_tabs_to_spaces>h2+div>p:first-of-type>code>span'
    );
    translateTabsToSpacesOption = document.getElementById(
        'translate_tabs_to_spaces_option'
    );
    translateTabsToSpacesOption.addEventListener(
        'change',
        updateTranslateTabsToSpaces,
        false
    );
    userChoiceForTranslateTabsToSpacesDisplayedInSpan.textContent =
        translateTabsToSpacesOption.value;

    /**
     * USE TAB STOPS
     */
    userChoiceForUseTabStopsInSpan = document.querySelector(
        '#use_tab_stops>h2+div>p:first-of-type>code>span'
    );
    useTabStopsOption = document.getElementById('use_tab_stops_option');
    useTabStopsOption.addEventListener(
        'change',
        updateUseTabStopsOption,
        false
    );
    userChoiceForUseTabStopsInSpan.textContent = useTabStopsOption.value;

    /**
     * DETECT INDENTATION
     */
    userChoiceForDetectIndentationInSpan = document.querySelector(
        '#detect_indentation>h2+div>p:first-of-type>code>span'
    );
    detectIndentationOption = document.getElementById('detect_indentation_option');
    detectIndentationOption.addEventListener(
        'change',
        updateDetectIndentationOption,
        false
    );
    userChoiceForDetectIndentationInSpan.textContent =
        detectIndentationOption.value;

    /**
     * AUTO INDENT
     */
    userChoiceForAutoIndentDisplayedInSpan = document.querySelector(
        '#auto_indent>h2+div>p:first-of-type>code>span'
    );
    autoIndentOption = document.getElementById('auto_indent_option');
    autoIndentOption.addEventListener(
        'change',
        updateContentInSpanForAutoIndentOption,
        false
    );
    userChoiceForAutoIndentDisplayedInSpan.textContent = autoIndentOption.value;

    /**
     * TRIM AUTOMATIC WHITE SPACE
     */
    userChoiceForTrimAutomaticWhiteSpaceDisplayedInSpan = document.querySelector(
        '#trim_automatic_white_space>h2+div>p:first-of-type>code>span'
    );
    trimAutomaticWhiteSpaceOption =
        document.getElementById('trim_automatic_white_space_option');
    trimAutomaticWhiteSpaceOption.addEventListener(
        'change',
        updateContentInSpanForTrimAutomaticWhiteSpace,
        false
    );
    userChoiceForTrimAutomaticWhiteSpaceDisplayedInSpan.textContent =
        trimAutomaticWhiteSpaceOption.value;

    /**
     * WORD WRAP
     */
    userChoiceForWordWrapDisplayedInSpan = document.querySelector(
        '#word_wrap>h2+div>p:first-of-type>code>span'
    );
    wordWrapOption =
        document.getElementById('word_wrap_option');
    wordWrapOption.addEventListener(
        'change',
        updateContentInSpanForWordWrap,
        false
    );
    userChoiceForWordWrapDisplayedInSpan.textContent = wordWrapOption.value;

    /**
     * WRAP WIDTH
     */
    userChoiceForWrapWidthDisplayedInSpan = document.querySelector(
        '#wrap_width>h2+div>p:first-of-type>code>span'
    );
    wrapWidthOption = document.getElementById('wrap_width_option');
    wrapWidthOption.addEventListener(
        'input',
        updateContentInSpanForWrapWidth,
        false
    );
    userChoiceForWrapWidthDisplayedInSpan.textContent = wrapWidthOption.value;

    /**
     * DRAW CENTERED
     */
    userChoiceForDrawCenteredDisplayedInSpan = document.querySelector(
        '#draw_centered>h2+div>p:first-of-type>code>span'
    );
    drawCenteredOption = document.getElementById('draw_centered_option');
    drawCenteredOption.addEventListener(
        'change',
        updateContentInSpanForDrawCentered,
        false
    );
    userChoiceForDrawCenteredDisplayedInSpan.textContent = drawCenteredOption.value;

    /**
     * DICTIONARY
     */
    userChoiceForDictionaryDisplayedInSpan =
        document.querySelector(
            '#dictionary>h2+div>p:first-of-type>code>span'
        );
    dictionaryOption = document.getElementById('dictionary_option');
    dictionaryOption.addEventListener(
        'change',
        updateContentInSpanForDictionary,
        false
    );
    userChoiceForDictionaryDisplayedInSpan.textContent =
        dictionaryOption.value;

    /**
     * DRAW MINIMAP BORDER
     */
    userChoiceForDrawMinimapBorderDisplayedInSpan =
        document.querySelector(
            '#draw_minimap_border>h2+div>p:first-of-type>code>span'
        );
    drawMinimapBorderOption = document.getElementById('draw_minimap_border_option');
    drawMinimapBorderOption.addEventListener(
        'change',
        updateContentInSpanForDrawMinimapBorder,
        false
    );
    userChoiceForDrawMinimapBorderDisplayedInSpan.textContent =
        drawMinimapBorderOption.value;

    /**
     * ALWAYS SHOW MINIMAP VIEWPORT
     */
    userChoiceForAlwaysShowMinimapViewportDisplayedInSpan =
        document.querySelector(
            '#always_show_minimap_viewport>h2+div>p:first-of-type>code>span'
        );
    alwaysShowMinimapViewportOption =
        document.getElementById('always_show_minimap_viewport_option');
    alwaysShowMinimapViewportOption.addEventListener(
        'change',
        updateContentInSpanForAlwaysShowMinimapViewport,
        false
    );
    userChoiceForAlwaysShowMinimapViewportDisplayedInSpan.textContent =
        alwaysShowMinimapViewportOption.value;

    /**
     * HIGHLIGHT LINE
     */
    userChoiceForHighlightLineDisplayedInSpan =
        document.querySelector(
            '#highlight_line>h2+div>p:first-of-type>code>span'
        );
    highlightLineOption = document.getElementById('highlight_line_option');
    highlightLineOption.addEventListener(
        'change',
        updateContentInSpanForHighlightLine,
        false
    );
    userChoiceForHighlightLineDisplayedInSpan.textContent =
        highlightLineOption.value;

    /**
     * CARET STYLE
     */
    userChoiceForCaretStyleDisplayedInSpan = document.querySelector(
        '#caret_style>h2+div>p:first-of-type>code>span'
    );
    caretStyleOption = document.getElementById('caret_style_option');
    caretStyleOption.addEventListener(
        'change',
        updateContentInSpanForCaretStyleOption,
        false
    );
    userChoiceForCaretStyleDisplayedInSpan.textContent = caretStyleOption.value;

    /**
     * SCROLL PAST END
     */
    userChoiceForScrollPastEndDisplayedInSpan = document.querySelector(
        '#scroll_past_end>h2+div>p:first-of-type>code>span'
    );
    scrollPastEndOption = document.getElementById('scroll_past_end_option');
    scrollPastEndOption.addEventListener(
        'change',
        updateContentInSpanForScrollPastEnd,
        false
    );
    userChoiceForScrollPastEndDisplayedInSpan.textContent =
        scrollPastEndOption.value;

    /**
     * DRAW WHITE SPACE
     */
    userChoiceForDrawWhiteSpaceDisplayedInSpan = document.querySelector(
        '#draw_white_space>h2+div>p:first-of-type>code>span'
    );
    drawWhiteSpaceOption = document.getElementById('draw_white_space_option');
    drawWhiteSpaceOption.addEventListener(
        'change',
        updateContentInSpanForDrawWhiteSpace,
        false
    );
    userChoiceForDrawWhiteSpaceDisplayedInSpan.textContent =
        drawWhiteSpaceOption.value;

    /**
     * TRIM TRAILING WHITE SPACE ON SAVE
     */
    userChoiceForTrimTrailingWhiteSpaceOnSaveDisplayedInSpan =
        document.querySelector(
            '#trim_trailing_white_space_on_save>h2+div>p:first-of-type>code>span'
        );
    trimTrailingWhiteSpaceOnSaveOption =
        document.getElementById('trim_trailing_white_space_on_save_option');
    trimTrailingWhiteSpaceOnSaveOption.addEventListener(
        'change',
        updateContentInSpanForTrimTrailingWhiteSpace,
        false
    );
    userChoiceForTrimTrailingWhiteSpaceOnSaveDisplayedInSpan.textContent =
        trimTrailingWhiteSpaceOnSaveOption.value;

    /**
     * ENSURE NEWLINE AT EOF ON SAVE
     */
    userChoiceForEnsureNewlineAtEOFOnSaveDisplayedInSpan =
        document.querySelector(
            '#ensure_newline_at_eof_on_save>h2+div>p:first-of-type>code>span'
        );
    ensureNewlineAtEOFOnSaveOption =
        document.getElementById('ensure_newline_at_eof_on_save_option');
    ensureNewlineAtEOFOnSaveOption.addEventListener(
        'change',
        updateContentInSpanForEnsureNewlineAtEOFOnSave,
        false
    );
    userChoiceForEnsureNewlineAtEOFOnSaveDisplayedInSpan.textContent =
        ensureNewlineAtEOFOnSaveOption.value;

    /**
     * SAVE ON FOCUS LOST
     */
    userChoiceForSaveOnFocusLostDisplayedInSpan =
        document.querySelector(
            '#save_on_focus_lost>h2+div>p:first-of-type>code>span'
        );
    saveOnFocusLostOption = document.getElementById('save_on_focus_lost_option');
    saveOnFocusLostOption.addEventListener(
        'change',
        updateContentInSpanForSaveOnFocusLost,
        false
    );
    userChoiceForSaveOnFocusLostDisplayedInSpan.textContent =
        saveOnFocusLostOption.value;

    /**
     * DEFAULT LINE ENDING
     */
    userChoiceForDefaultLineEndingDisplayedInSpan =
        document.querySelector(
            '#default_line_ending>h2+div>p:first-of-type>code>span'
        );
    defaultLineEndingOption = document.getElementById('default_line_ending_option');
    defaultLineEndingOption.addEventListener(
        'change',
        updateContentInSpanForDefaultLineEnding,
        false
    );
    userChoiceForDefaultLineEndingDisplayedInSpan.textContent =
        defaultLineEndingOption.value;

    /**
     * COPY WITH EMPTY SELECTION
     */
    userChoiceForCopyWithEmptySelectionDisplayedInSpan =
        document.querySelector(
            '#copy_with_empty_selection>h2+div>p:first-of-type>code>span'
        );
    copyWithEmptySelectionOption =
        document.getElementById('copy_with_empty_selection_option');
    copyWithEmptySelectionOption.addEventListener(
        'change',
        updateContentInSpanForCopyWithEmptySelection,
        false
    );
    userChoiceForCopyWithEmptySelectionDisplayedInSpan.textContent =
        copyWithEmptySelectionOption.value;

    /**
     * DRAG TEXT
     */
    userChoiceForDragTextDisplayedInSpan =
        document.querySelector(
            '#drag_text>h2+div>p:first-of-type>code>span'
        );
    dragTextOption = document.getElementById('drag_text_option');
    dragTextOption.addEventListener(
        'change',
        updateContentInSpanForDragText,
        false
    );
    userChoiceForDragTextDisplayedInSpan.textContent =
        dragTextOption.value;

    /**
     * TREE ANIMATION ENABLED
     */
    userChoiceForTreeAnimationEnabledDisplayedInSpan =
        document.querySelector(
            '#tree_animation_enabled>h2+div>p:first-of-type>code>span'
        );
    treeAnimationEnabledOption =
        document.getElementById('tree_animation_enabled_option');
    treeAnimationEnabledOption.addEventListener(
        'change',
        updateContentInSpanForTreeAnimationEnabled,
        false
    );
    userChoiceForTreeAnimationEnabledDisplayedInSpan.textContent =
        treeAnimationEnabledOption.value;

    /**
     * ANIMATION ENABLED
     */
    userChoiceForAnimationEnabledDisplayedInSpan =
        document.querySelector(
            '#animation_enabled>h2+div>p:first-of-type>code>span'
        );
    animationEnabledOption =
        document.getElementById('animation_enabled_option');
    animationEnabledOption.addEventListener(
        'change',
        updateContentInSpanForAnimationEnabled,
        false
    );
    userChoiceForAnimationEnabledDisplayedInSpan.textContent =
        animationEnabledOption.value;

    /**
     * HIGHLIGHT MODIFIED TABS
     */
    userChoiceForHighlightModifiedTabsDisplayedInSpan =
        document.querySelector(
            '#highlight_modified_tabs>h2+div>p:first-of-type>code>span'
        );
    highlightModifiedTabsOption =
        document.getElementById('highlight_modified_tabs_option');
    highlightModifiedTabsOption.addEventListener(
        'change',
        updateContentInSpanForHighlightModifiedTabs,
        false
    );
    userChoiceForHighlightModifiedTabsDisplayedInSpan.textContent =
        highlightModifiedTabsOption.value;

    /**
     * OVERLAY SCROLL BARS
     */
    userChoiceForOverlayScrollBarsDisplayInSpan =
        document.querySelector(
            '#overlay_scroll_bars>h2+div>p:first-of-type>code>span'
        );
    overlayScrollBarsOption = document.getElementById('overlay_scroll_bars_option');
    overlayScrollBarsOption.addEventListener(
        'change',
        updateContentInSpanForOverlayScrollBars,
        false
    );
    userChoiceForOverlayScrollBarsDisplayInSpan.textContent =
        overlayScrollBarsOption.value;

    /**
     * SHOW ENCODING
     */
    userChoiceForShowEncodingDisplayedInSpan =
        document.querySelector(
            '#show_encoding>h2+div>p:first-of-type>code>span'
        );
    showEncodingOption = document.getElementById('show_encoding_option');
    showEncodingOption.addEventListener(
        'change',
        updateContentInSpanForShowEncoding,
        false
    );
    userChoiceForShowEncodingDisplayedInSpan.textContent =
        showEncodingOption.value;

    /**
     * SHOW LINE ENDINGS
     */
    userChoiceForShowLineEndingsDisplayedInSpan =
        document.querySelector(
            '#show_line_endings>h2+div>p:first-of-type>code>span'
        );
    showLineEndingsOption = document.getElementById('show_line_endings_option');
    showLineEndingsOption.addEventListener(
        'change',
        updateContentInSpanForShowLineEndings,
        false
    );
    userChoiceForShowLineEndingsDisplayedInSpan.textContent =
        showLineEndingsOption.value;

    /**
     * HOT EXIT
     */
    userChoiceForHotExitDisplayedInSpan =
        document.querySelector(
            '#hot_exit>h2+div>p:first-of-type>code>span'
        );
    hotExitOption = document.getElementById('hot_exit_option');
    hotExitOption.addEventListener(
        'change',
        updateContentInSpanForHotExit,
        false
    );
    userChoiceForHotExitDisplayedInSpan.textContent =
        hotExitOption.value;

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

    /**
     * TEMPLATE
     */
    /*
    userChoiceForOPTIONDisplayedInSpan =
        document.querySelector(
            "#OPTION>h2+div>p:first-of-type>code>span"
        );
    OPTIONOption = document.getElementById("OPTION_option");
    OPTIONOption.addEventListener(
        "change",
        updateContentInSpanForOPTION,
        false
    );
    userChoiceForOPTIONDisplayedInSpan.textContent =
        OPTIONOption.value;
    */
};
