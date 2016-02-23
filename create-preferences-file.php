<?php
/**
 * The target of the form submission page (index.php).
 *
 * This page processes the form at index.php that the user submits with her/his
 * preferences.
 *
 * PHP version 5.3.29
 *
 * @category Create_Sublime_Text_User_Preferences_File
 * @package  Create_Sublime_Text_User_Preferences_File
 * @author   Roy A Vanegas <roy@thecodeeducators.com>
 * @license  gnu.org/licenses/gpl.html GNU General Public License
 * @link     bitbucket.org/code-warrior/create-sublime-text-user-preferences-file
 */

date_default_timezone_set('UTC');
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Your Sublime Preferences File is Ready!</title>

    <meta name="description"
          content="Create a Custom Sublime Text User Preferences File">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/style.css">
</head>
<body id="generated-file">
   <h1>Your Preferences File!</h1>
   <h2>Quick Notes</h2>
   <ul>
       <li>You can reconstruct this page by bookmarking it.</li>
       <li>You can share this page by copying its address.</li>
   </ul>

   <h2>Installation Instructions</h2>
   <ol>
      <li><a href="download-preferences-file.php">Download this file</a> and rename
      it <code>Preferences.sublime-settings</code>, or copy everything in the bounded
      region below into a new text file and call it
      <code>Preferences.sublime-settings</code>.</li>
      <li>Place <code>Preferences.sublime-settings</code> in your Sublime Text’s
      <code>User</code> folder:
         <ul>
            <li><h3>Mac</h3>
               <kbd>/Users/USER_NAME/Library/Application Support/Sublime Text
               3/Packages/User</kbd>, where <code>USER_NAME</code> is your Mac
               username.</li>
            <li><h3>Windows</h3>
               <kbd>C:\Users\USER_NAME\AppData\Roaming\Sublime Text
               3\Packages\User</kbd>, again, where <code>USER_NAME</code> is your
               Windows user name.</li>
         </ul>
      </li>
   </ol>
<pre>{
<?php

$options = "";

/**
 * COLOR SCHEME
 */
if (!empty($_GET['color_scheme_option'])) {
    $colorSchemeOption = trim($_GET['color_scheme_option']);

    if (strcmp($colorSchemeOption, "Monokai.tmTheme") !== 0) {
        $options .= '   "color_scheme": "Packages/Color Scheme - Default/' .
            $colorSchemeOption . '",' . "\n";
    }
}

/**
 * FONT FACE
 */
if (isset($_GET['font_face_option'])) {
    $options .= '   "font_face": "' . trim($_GET['font_face_option']) . '",' . "\n";
}

/**
 * FONT SIZE
 */
if (isset($_GET['font_size_option'])) {
    $options .= '   "font_size": ' . trim($_GET['font_size_option']) . ',' . "\n";
}

/**
 * FONT OPTIONS
 */
if (!empty($_GET['font_options_option'])) {
    if (strcmp($_GET['font_options_option'], "") !== 0 ) {
        $options .= '   "font_options": [' . $_GET['font_options_option'] . "],\n";
    }
}

/**
 * WORD SEPARATORS
 */
if (!empty($_GET['word_separators_option'])) {
    if (strcmp(
        $_GET['word_separators_option'], "./\\\\()\\\"'-:,l;<>~!@#$%^&*|+=[]{}`~?"
    ) !== 0) {
        $options .= '   "word_separators": "' .
            $_GET['word_separators_option'] . '",' . "\n";
    }
}

/**
 * LINE NUMBERS
 */
if (!empty($_GET['line_numbers_option'])) {
    if (strcmp($_GET['line_numbers_option'], "true") !== 0) {
        $options .= '   "line_numbers": ' .
            $_GET['line_numbers_option'] . ',' . "\n";
    }
}

/**
 * GUTTER
 */
if (!empty($_GET['gutter_option'])) {
    if (strcmp($_GET['gutter_option'], "true") !== 0) {
        $options .= '   "gutter": ' . $_GET['gutter_option'] . ',' . "\n";
    }
}

/**
 * MARGIN
 */
if (!empty($_GET['margin_option'])) {
    if (strcmp($_GET['margin_option'], "4") !== 0) {
        $options .= '   "margin": ' . $_GET['margin_option'] . ',' . "\n";
    }
}

/**
 * FOLD BUTTONS
 */
if (!empty($_GET['fold_buttons_option'])) {
    if (strcmp($_GET['fold_buttons_option'], "true") !== 0) {
        $options .= '   "fold_buttons": ' .
            $_GET['fold_buttons_option'] . ',' . "\n";
    }
}

/**
 * FADE FOLD BUTTONS
 */
if (!empty($_GET['fade_fold_buttons_option'])) {
    if (strcmp($_GET['fade_fold_buttons_option'], "true") !== 0) {
        $options .= '   "fade_fold_buttons": ' .
            $_GET['fade_fold_buttons_option'] . ',' . "\n";
    }
}

/**
 * RULERS
 */
if (!empty($_GET['rulers_option'])) {
    if (strcmp($_GET['rulers_option'], "") !== 0) {
        $options .= '   "rulers": [' . $_GET['rulers_option'] . '],' . "\n";
    }
}

/**
 * SPELL CHECK
 */
if (!empty($_GET['spell_check_option'])) {
    if (strcmp($_GET['spell_check_option'], "false") !== 0) {
        $options .= '   "spell_check": ' . $_GET['spell_check_option'] . ',' . "\n";
    }
}

/**
 * TAB SIZE
 */
if (!empty($_GET['tab_size_option'])) {
    if (strcmp($_GET['tab_size_option'], "4") !== 0) {
        $options .= '   "tab_size": ' . $_GET['tab_size_option'] . ',' . "\n";
    }
}

/**
 * TRANSLATE TABS TO SPACES
 */
if (!empty($_GET['translate_tabs_to_spaces_option'])) {
    if (strcmp($_GET['translate_tabs_to_spaces_option'], "false") !== 0) {
        $options .= '   "translate_tabs_to_spaces": ' .
            $_GET['translate_tabs_to_spaces_option'] . ',' . "\n";
    }
}

/**
 * USE TAB STOPS
 */
if (!empty($_GET['use_tab_stops_option'])) {
    if (strcmp($_GET['use_tab_stops_option'], "true") !== 0) {
        $options .= '   "use_tab_stops": ' .
            $_GET['use_tab_stops_option'] . ',' . "\n";
    }
}

/**
 * DETECT INDENTATION
 */
if (!empty($_GET['detect_indentation_option'])) {
    if (strcmp($_GET['detect_indentation_option'], "true") !== 0) {
        $options .= '   "detect_indentation": ' .
            $_GET['detect_indentation_option'] . ',' . "\n";
    }
}

/**
 * AUTO INDENT
 */
if (!empty($_GET['auto_indent_option'])) {
    if (strcmp($_GET['auto_indent_option'], "true") !== 0) {
        $options .= '   "auto_indent": ' . $_GET['auto_indent_option'] . ',' . "\n";
    }
}

/**
 * TRIM AUTOMATIC WHITE SPACE
 */
if (!empty($_GET['trim_automatic_white_space_option'])) {
    if (strcmp($_GET['trim_automatic_white_space_option'], "true") !== 0) {
        $options .= '   "trim_automatic_white_space": ' .
            $_GET['trim_automatic_white_space_option'] . ',' . "\n";
    }
}

/**
 * WORD WRAP
 */
if (!empty($_GET['word_wrap_option'])) {
    if (strcmp($_GET['word_wrap_option'], "auto") !== 0) {
        $options .= '   "word_wrap": ' . $_GET['word_wrap_option'] . ',' . "\n";
    }
}

/**
 * WRAP WIDTH
 */
if (!empty($_GET['wrap_width_option'])) {
    if (strcmp($_GET['wrap_width_option'], "0") !== 0) {
        $options .= '   "wrap_width": ' . $_GET['wrap_width_option'] . ',' . "\n";
    }
}

/**
 * DRAW CENTERED
 */
if (!empty($_GET['draw_centered_option'])) {
    if (strcmp($_GET['draw_centered_option'], "false") !== 0) {
        $options .= '   "draw_centered": ' .
            $_GET['draw_centered_option'] . ',' . "\n";
    }
}

/**
 * DICTIONARY
 */
if (!empty($_GET['dictionary_option'])) {
    if (strcmp(
        $_GET['dictionary_option'],
        "Packages/Language - English/en_US.dic"
    ) !== 0) {
        $options .= '   "dictionary": ' .
            " \"{$_GET['dictionary_option']}\",\n";
    }
}

/**
 * DRAW MINIMAP BORDER
 */

if (!empty($_GET['draw_minimap_border_option'])) {
    if (strcmp($_GET['draw_minimap_border_option'], "false") !== 0) {
        $options .= '   "draw_minimap_border": ' .
            $_GET['draw_minimap_border_option'] . ',' . "\n";
    }
}

/**
 * ALWAYS SHOW MINIMAP VIEWPORT
 */
if (!empty($_GET['always_show_minimap_viewport_option'])) {
    if (strcmp($_GET['always_show_minimap_viewport_option'], "false") !== 0) {
        $options .= '   "always_show_minimap_viewport": ' .
            $_GET['always_show_minimap_viewport_option'] . ',' . "\n";
    }
}

/**
 * HIGHLIGHT LINE
 */
if (!empty($_GET['highlight_line_option'])) {
    if (strcmp($_GET['highlight_line_option'], "false") !== 0) {
        $options .= '   "highlight_line": ' .
            $_GET['highlight_line_option'].',' . "\n";
    }
}

/**
 * CARET STYLE
 */
if (!empty($_GET['caret_style_option'])) {
    if (strcmp($_GET['caret_style_option'], "smooth") !== 0) {
        $options .= '   "caret_style": "' .
            $_GET['caret_style_option'] . '",' . "\n";
    }
}

/**
 * SCROLL PAST END
 */
if (isset($_GET['scroll_past_end_option'])) {
    $options .= '   "scroll_past_end": ' .
        $_GET['scroll_past_end_option'] . ',' . "\n";
}

/**
 * DRAW WHITE SPACE
 */
if (isset($_GET['draw_white_space_option'])) {
    if (strcmp($_GET['draw_white_space_option'], "selection") !== 0) {
        $options .= '   "draw_white_space": "' .
            $_GET['draw_white_space_option'] . '",' . "\n";
    }
}

/**
 * TRIM TRALING WHITE SPACE ON SAVE
 */
if (!empty($_GET['trim_trailing_white_space_on_save_option'])) {
    if (strcmp($_GET['trim_trailing_white_space_on_save_option'], "false") !== 0) {
        $options .= '   "trim_trailing_white_space_on_save": ' .
            $_GET['trim_trailing_white_space_on_save_option'] . ',' . "\n";
    }
}

/**
 * ENSURE NEWLINE AT EOF ON SAVE
 */
if (!empty($_GET['ensure_newline_at_eof_on_save_option'])) {
    if (strcmp($_GET['ensure_newline_at_eof_on_save_option'], "false") !== 0) {
        $options .= '   "ensure_newline_at_eof_on_save": ' .
            $_GET['ensure_newline_at_eof_on_save_option'] . ',' . "\n";
    }
}

/**
 * SAVE ON FOCUS LOST
 */
if (!empty($_GET['save_on_focus_lost_option'])) {
    if (strcmp($_GET['save_on_focus_lost_option'], "false") !== 0) {
        $options .= '   "save_on_focus_lost": ' .
            $_GET['save_on_focus_lost_option'] . ',' . "\n";
    }
}

/**
 * DEFAULT LINE ENDING
 */
if (!empty($_GET['default_line_ending_option'])) {
    if (strcmp($_GET['default_line_ending_option'], "system") !== 0) {
        $options .= '   "default_line_ending": "' .
            $_GET['default_line_ending_option'] . '",' . "\n";
    }
}

/**
 * COPY WITH EMPTY SELECTION
 */
if (!empty($_GET['copy_with_empty_selection_option'])) {
    if (strcmp($_GET['copy_with_empty_selection_option'], "true") !== 0) {
        $options .= '   "copy_with_empty_selection": ' .
            $_GET['copy_with_empty_selection_option'] . ',' . "\n";
    }
}

/**
 * DRAG TEXT
 */
if (!empty($_GET['drag_text_option'])) {
    if (strcmp($_GET['drag_text_option'], "true") !== 0) {
        $options .= '   "drag_text": ' . $_GET['drag_text_option'] . ',' . "\n";
    }
}

/**
 * TREE ANIMATION ENABLED
 */

if (!empty($_GET['tree_animation_enabled_option'])) {
    if (strcmp($_GET['tree_animation_enabled_option'], "true") !== 0) {
        $options .= '   "tree_animation_enabled": ' .
            $_GET['tree_animation_enabled_option'] . ',' . "\n";
    }
}

/**
 * ANIMATION ENABLED
 */

if (!empty($_GET['animation_enabled_option'])) {
    if (strcmp($_GET['animation_enabled_option'], "true") !== 0) {
        $options .= '   "animation_enabled": ' .
            $_GET['animation_enabled_option'] . ',' . "\n";
    }
}

/**
 * HIGHLIGHT MODIFIED TABS
 */
if (!empty($_GET['highlight_modified_tabs_option'])) {
    if (strcmp($_GET['highlight_modified_tabs_option'], "false") !== 0) {
        $options .= '   "highlight_modified_tabs": ' .
            $_GET['highlight_modified_tabs_option'] . ',' . "\n";
    }
}

/**
 * OVERLAY SCROLL BARS
 */
if (!empty($_GET['overlay_scroll_bars_option'])) {
    if (strcmp($_GET['overlay_scroll_bars_option'], "system") !== 0) {
        $options .= '   "overlay_scroll_bars": ' .
            $_GET['overlay_scroll_bars_option'].',' . "\n";
    }
}

/**
 * SHOW ENCODING
 */
if (!empty($_GET['show_encoding_option'])) {
    if (strcmp($_GET['show_encoding_option'], "false") !== 0) {
        $options .= '   "show_encoding": ' .
            $_GET['show_encoding_option'] . ',' . "\n";
    }
}

/**
 * SHOW LINE ENDINGS
 */
if (!empty($_GET['show_line_endings_option'])) {
    if (strcmp($_GET['show_line_endings_option'], "false") !== 0) {
        $options .= '   "show_line_endings": ' .
            $_GET['show_line_endings_option'] . ',' . "\n";
    }
}

/**
 * SHOW LINE ENDINGS
 */
if (!empty($_GET['hot_exit_option'])) {
    if (strcmp($_GET['hot_exit_option'], "true") !== 0) {
        $options .= '   "hot_exit": ' . $_GET['hot_exit_option'] . ',' . "\n";
    }
}

/**
 * ALWAYS PROMPT FOR FILE RELOAD
 */
if (!empty($_GET['always_prompt_for_file_reload_option'])) {
    if (strcmp($_GET['always_prompt_for_file_reload_option'], "true") !== 0) {
        $options .= '   "always_prompt_for_file_reload": ' .
            $_GET['always_prompt_for_file_reload_option'] . ',' . "\n";
    }
}

/**
 * OPEN FILES IN NEW WINDOW
 */
if (!empty($_GET['open_files_in_new_window_option'])) {
    if (strcmp($_GET['open_files_in_new_window_option'], "true") !== 0) {
        $options .= '   "open_files_in_new_window": ' .
            $_GET['open_files_in_new_window_option'] . ',' . "\n";
    }
}

/**
 * CREATE WINDOW AT STARTUP
 */
if (!empty($_GET['create_window_at_startup_option'])) {
    if (strcmp($_GET['create_window_at_startup_option'], "true") !== 0) {
        $options .= '   "create_window_at_startup": ' .
            $_GET['create_window_at_startup_option'] . ',' . "\n";
    }
}

/**
 * SHOW FULL PATH
 */
if (isset($_GET['show_full_path_option'])) {
    $options .= '   "show_full_path": ' .
        trim($_GET['show_full_path_option']) . ',' . "\n";
}

/**
 * PREVIEW ON CLICK
 */
if (!empty($_GET['preview_on_click_option'])) {
    if (strcmp($_GET['preview_on_click_option'], "true") !== 0) {
        $options .= '   "preview_on_click": ' .
            $_GET['preview_on_click_option'].',' . "\n";
    }
}

if (strlen($options) !== 0 ) {
    $indexOfLastComma = strrpos($options, ',', 0);
    $options[$indexOfLastComma] = ' '; // Replace the last comma with a space
    echo $options;

    /**
     * Add the left and right curly braces to $options in order to properly create
     * the JSON string.
     */
    $_SESSION['options'] = "{\n" . $options . "}\n";
}
?>
}
</pre>
    </body>
</html>
