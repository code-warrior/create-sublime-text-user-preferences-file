/*jslint browser: true, devel: true, indent: 4, maxlen: 85 */

   /*
    * This variable holds an array of the <span> elements in index.php that are
    * updated when a user makes a choice for any of the available options. The
    * default Sublime option is what is initially displayed.
    *
    * Consider the `font_size` option, with its default value of `10`. In the web
    * page, it appears underneath the heading as `"font_size": 10,`. The number 10 is
    * wrapped in <span> tags referenced by this option at userChoice[2]. If a user
    * chooses 14 as the value to `font_size`, then userChoice[2] is updated below
    * with the new value.
    */
var userChoice = document.querySelectorAll('h2+div>p:first-of-type>code>span'),

    /*
     * Each element with an ID whose name ends in “option” will be saved in the
     * following array. Items in this array work in tandem with the userChoice array
     * initialized above.
     */
    options = [],
    fontObject = {
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
    fontFaceImportantNote,
    fontFaceImportantNoteMessage,
    introduction,
    styleSheet,
    button;

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
        setTimeout(function () {
            fontFaceImportantNote.setAttribute('class', 'transition');
        }, 300);

        fontFaceImportantNoteMessage.innerHTML =
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
        userChoice[0].textContent = options[0].value;

        if ('' === options[0].value) {
            userChoice[0].textContent = 'Monokai.tmTheme';
        }

        break;

    case 'font_face_option':
        userChoice[1].textContent = options[1].value;

        if ('' === options[1].value) {
            userChoice[1].textContent = '';
        }

        break;

    case 'font_size_option':
        if ('' === options[2].value) {
            submit.removeAttribute('disabled');
            userChoice[2].textContent = '10';
        } else {
            input = parseInt(options[2].value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[2].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[2].textContent = options[2].value;
            }
        }

        break;

    case 'font_options_option':
        userChoice[3].textContent =
            ('' === options[3].value) ? ' ' : options[3].value;

        break;

    case 'word_separators_option':
        userChoice[4].textContent = options[4].value;

        break;

    case 'line_numbers_option':
        userChoice[5].textContent = options[5].value;

        break;

    case 'gutter_option':
        userChoice[6].textContent = options[6].value;

        break;

    case 'margin_option':
        if ('' === options[7].value) {
            submit.removeAttribute('disabled');
            userChoice[7].textContent = '4';
        } else {
            input = parseInt(options[7].value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[7].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[7].textContent = options[7].value;
            }
        }

        break;

    case 'fold_buttons_option':
        userChoice[8].textContent = options[8].value;

        break;

    case 'fade_fold_buttons_option':
        userChoice[9].textContent = options[9].value;

        break;

    case 'rulers_option':
        userChoice[10].textContent = options[10].value;

        break;

    case 'spell_check_option':
        userChoice[11].textContent = options[11].value;

        break;

    case 'tab_size_option':
        if ('' === options[12].value) {
            submit.removeAttribute('disabled');

            userChoice[12].textContent = '4';
        } else {
            input = parseInt(options[12].value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[12].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');

                userChoice[12].textContent = options[12].value;
            }
        }

        break;

    case 'translate_tabs_to_spaces_option':
        userChoice[13].textContent = options[13].value;

        break;

    case 'use_tab_stops_option':
        userChoice[14].textContent = options[14].value;

        break;

    case 'detect_indentation_option':
        userChoice[15].textContent = options[15].value;

        break;

    case 'auto_indent_option':
        userChoice[16].textContent = options[16].value;

        break;

    case 'trim_automatic_white_space_option':
        userChoice[17].textContent = options[17].value;

        break;

    case 'word_wrap_option':
        userChoice[18].textContent = options[18].value;

        break;

    case 'wrap_width_option':
        if ('' === options[19].value) {
            submit.removeAttribute('disabled');
            userChoice[19].textContent = '0';
        } else {
            input = parseInt(options[19].value, 10);

            if (isNaN(input)) {
                submit.setAttribute('disabled', 'disabled');

                userChoice[19].innerHTML =
                    '<span class="error">That is not a number. ' +
                    'Submission is disabled</span>';
            } else {
                submit.removeAttribute('disabled');
                userChoice[19].textContent = options[19].value;
            }
        }

        break;

    case 'draw_centered_option':
        userChoice[20].textContent = options[20].value;

        break;

    case 'dictionary_option':
        userChoice[21].textContent = options[21].value;

        break;

    case 'draw_minimap_border_option':
        userChoice[22].textContent = options[22].value;

        break;

    case 'always_show_minimap_viewport_option':
        userChoice[23].textContent = options[23].value;

        break;

    case 'highlight_line_option':
        userChoice[24].textContent = options[24].value;

        break;

    case 'caret_style_option':
        userChoice[25].textContent = options[25].value;

        break;

    case 'match_brackets_option':
        userChoice[26].textContent = options[26].value;

        break;

    case 'match_brackets_content_option':
        userChoice[27].textContent = options[27].value;

        break;

    case 'match_brackets_square_option':
        userChoice[28].textContent = options[28].value;

        break;

    case 'match_brackets_braces_option':
        userChoice[29].textContent = options[29].value;

        break;

    case 'match_brackets_angle_option':
        userChoice[30].textContent = options[30].value;

        break;

    case 'scroll_past_end_option':
        userChoice[31].textContent = options[31].value;

        break;

    case 'draw_white_space_option':
        userChoice[32].textContent = options[32].value;

        break;

    case 'trim_trailing_white_space_on_save_option':
        userChoice[33].textContent = options[33].value;

        break;

    case 'ensure_newline_at_eof_on_save_option':
        userChoice[34].textContent = options[34].value;

        break;

    case 'save_on_focus_lost_option':
        userChoice[35].textContent = options[35].value;

        break;

    case 'default_line_ending_option':
        userChoice[36].textContent = options[36].value;

        break;

    case 'copy_with_empty_selection_option':
        userChoice[37].textContent = options[37].value;

        break;

    case 'drag_text_option':
        userChoice[38].textContent = options[38].value;

        break;

    case 'tree_animation_enabled_option':
        userChoice[39].textContent = options[39].value;

        break;

    case 'animation_enabled_option':
        userChoice[40].textContent = options[40].value;

        break;

    case 'highlight_modified_tabs_option':
        userChoice[41].textContent = options[41].value;

        break;

    case 'overlay_scroll_bars_option':
        userChoice[42].textContent = options[42].value;

        break;

    case 'show_encoding_option':
        userChoice[43].textContent = options[43].value;

        break;

    case 'show_line_endings_option':
        userChoice[44].textContent = options[44].value;

        break;

    case 'hot_exit_option':
        userChoice[45].textContent = options[45].value;

        break;

    case 'always_prompt_for_file_reload_option':
        userChoice[46].textContent = options[46].value;

        break;

    case 'open_files_in_new_window_option':
        userChoice[47].textContent = options[47].value;

        break;

    case 'create_window_at_startup_option':
        userChoice[48].textContent = options[48].value;

        break;

    case 'show_full_path_option':
        userChoice[49].textContent = options[49].value;

        break;

    case 'preview_on_click_option':
        userChoice[50].textContent = options[50].value;

        break;
    }
}

window.onload = function () {
    'use strict';

    var i,
        j,
        allElements = document.querySelectorAll('body *');

    submit = document.getElementById('submit');

    fontFaceInputBox =  document.getElementById('font_face_option');
    fontFaceInputBox.addEventListener('input', displayFontFaceInfo, false);
    fontFaceImportantNote = document.getElementById('font_face_important_note');
    fontFaceImportantNoteMessage =
        fontFaceImportantNote.getElementsByTagName('p')[0];
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

    for (i = 0, j = 0; i < allElements.length; i++) {
        if (allElements[i].hasAttribute('id')) {
            /*
             * The word “option” is 6 characters long. Thus, slice from end and
             * check if it is indeed the word “option.”
             */
            if ('option' === allElements[i].id.slice(-6)) {
                options[j++] = allElements[i];
            }
        }
    }

    /*
     * Set listeners to each of the options on the page, then initialize to
     * Sublime’s default value the value to the option on the example line under
     * each heading. For example, if you look under the Font Size option in the web
     * page, the value 10 is assigned to “font_size.” That value is initially
     * assigned by one of the for loops below. (It’s updated via the
     * updateContentInSpan function above.)
     *
     * The multiple for loops below are designed to avoid using multiple if
     * statements when setting “input” or “change” on all the event listeners.
     */
    for (i = 0; i < 3; i++) {
        options[i].addEventListener('input', updateContentInSpan, false);
        userChoice[i].textContent = options[i].value;
    }

    for (i = 3; i < 7; i++) {
        options[i].addEventListener('change', updateContentInSpan, false);
        userChoice[i].textContent = options[i].value;
    }

    options[i].addEventListener('input', updateContentInSpan, false);
    userChoice[i].textContent = options[i].value;

    for (i = 8; i < 12; i++) {
        options[i].addEventListener('change', updateContentInSpan, false);
        userChoice[i].textContent = options[i].value;
    }

    options[i].addEventListener('input', updateContentInSpan, false);
    userChoice[i].textContent = options[i].value;

    for (i = 13; i < 19; i++) {
        options[i].addEventListener('change', updateContentInSpan, false);
        userChoice[i].textContent = options[i].value;
    }

    options[i].addEventListener('input', updateContentInSpan, false);
    userChoice[i].textContent = options[i].value;

    for (i = 20; i < options.length; i++) {
        options[i].addEventListener('change', updateContentInSpan, false);
        userChoice[i].textContent = options[i].value;
    }
};
