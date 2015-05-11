<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Create a Custom Sublime Text User Preferences File (v0.0.4)</title>

   <meta name="description" content="Learn each of the 101 options in the Sublime Text 3 default preferences file, then generate a preferences file for use in your own Sublime Text environment.">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/style.css">
</head>
<body>
   <aside title="Fork me at Bitbucket"><a href="https://bitbucket.org/code-warrior/create-sublime-text-user-preferences-file">Fork at <img src="img/Atlassian_Bitbucket_Logo.png" height="22" alt="Bitbucket"></a></aside>
   <header>
      <h1>Create Sublime Text User Preferences File <sup>(v0.0.4)</sup></h1>
<?php require_once "includes/navigation.html"; ?>
   </header>
   <div id="introduction">
      <p>The purpose of this web site is two-fold. First, it explains in detail each of the options in Sublime Text’s <code>Preferences.sublime-settings</code> file. And second, it allows you to create a customized preferences file that you can install in your own Sublime environment.</p>
      <p>This entire page is one large form, and submitting it takes you to a page with a customized <code>Preferences.sublime-settings</code> file that you can copy, bookmark, and/or share. <a href="read-more.html" target="_blank">Read more here.</a></p>
      <p>Of the 101 options, thirty-six are discussed below. In my work as a programmer and my experience as a professor over the last decade, prioritizing these makes the most sense. The other sixty-five will slowly be implemented over the coming months.</p>
      <p><strong>Note</strong>: This site is in beta, meaning that some features, such as a navigation menu and collapsible headings, have yet to be implemented, some other features may not work well, or at all, and some options are missing. Bugs, issues, and feature requests should be submitted via <a href="https://bitbucket.org/code-warrior/create-sublime-text-user-preferences-file">Bitbucket</a>.</p>
      <address>— Roy Vanegas</address>
      <div><button>Hide the intro above</button></div>
   </div>
   <form method="get" action="create-preferences-file.php">
<?php
require_once "includes/01-color_scheme.html";
require_once "includes/02-font_face.html";
require_once "includes/03-font_size.html";
require_once "includes/04-font_options.html";
require_once "includes/05-word_separators.html";
require_once "includes/06-line_numbers.html";
require_once "includes/07-gutter.html";
require_once "includes/08-margin.html";
require_once "includes/09-fold_buttons.html";
require_once "includes/10-fade_fold_buttons.html";
require_once "includes/11-rulers.html";
require_once "includes/12-spell_check.html";
require_once "includes/13-tab_size.html";
require_once "includes/14-translate_tabs_to_spaces.html";
require_once "includes/15-use_tab_stops.html";
require_once "includes/16-detect_indentation.html";
require_once "includes/17-auto_indent.html";
require_once "includes/20-trim_automatic_white_space.html";
require_once "includes/21-word_wrap.html";
require_once "includes/22-wrap_width.html";
require_once "includes/24-draw_centered.html";
require_once "includes/31-caret_style.html";
require_once "includes/44-scroll_past_end.html";
require_once "includes/49-trim_trailing_white_space_on_save.html";
require_once "includes/50-ensure_newline_at_eof_on_save.html";
require_once "includes/51-save_on_focus_lost.html";
require_once "includes/56-default_line_ending.html";
require_once "includes/68-copy_with_empty_selection.html";
require_once "includes/71-drag_text.html";
require_once "includes/83-show_encoding.html";
require_once "includes/84-show_line_endings.html";
require_once "includes/85-hot_exit.html";
require_once "includes/87-always_prompt_for_file_reload.html";
require_once "includes/88-open_files_in_new_window.html";
require_once "includes/89-create_window_at_startup.html";
require_once "includes/91-show_full_path.html";
?>
      <div><input type="submit" id="submit" value="Show me my preferences file!"></div>
   </form>
   <script src="js/main.js"></script>
</body>
</html>
