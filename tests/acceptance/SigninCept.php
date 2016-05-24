<?php
$I = new AcceptanceTester($scenario);

$I->wantTo('Validate form fields');

$I->amOnPage('/home');
$I->see('Create Sublime Text User Preferences File');

$I->fillField('color_scheme_option','Amy.tmTheme');
$I->fillField('font_face_option','');
$I->fillField('font_size_option','10');
$I->selectOption('font_options_option','');
//$I->selectOption('word_separators_option','./\\()\"'-:,l;<>~!@#$%^&*|+=[]{}`~?');
$I->selectOption('line_numbers_option','true');
$I->selectOption('gutter_option','false');
$I->fillField('margin_option','4');
$I->selectOption('fold_buttons_option','true');
$I->selectOption('fade_fold_buttons_option','true');
$I->selectOption('rulers_option','');
$I->selectOption('spell_check_option','false');
$I->fillField('tab_size_option','4');
$I->selectOption('translate_tabs_to_spaces_option','false');
$I->selectOption('use_tab_stops_option','true');
$I->selectOption('detect_indentation_option','true');
$I->selectOption('auto_indent_option','true');
$I->selectOption('trim_automatic_white_space_option','true');
$I->selectOption('word_wrap_option','auto');
$I->fillField('wrap_width_option','0');
$I->selectOption('draw_centered_option','false');
$I->selectOption('dictionary_option','Packages/Language - English/en_US.dic');
$I->selectOption('draw_minimap_border_option','false');
$I->selectOption('always_show_minimap_viewport_option','false');
$I->selectOption('highlight_line_option','false');
$I->selectOption('caret_style_option','smooth');
$I->selectOption('match_brackets_option','true');
$I->selectOption('match_brackets_content_option','true');
$I->selectOption('match_brackets_square_option','true');
$I->selectOption('match_brackets_braces_option','true');
$I->selectOption('match_brackets_angle_option','false');
$I->selectOption('scroll_past_end_option','true');
$I->selectOption('draw_white_space_option','selection');
$I->selectOption('ensure_newline_at_eof_on_save_option','false');
$I->selectOption('save_on_focus_lost_option','false');
// $I->selectOption('default_line_ending_option','system');
$I->selectOption('copy_with_empty_selection_option','true');
$I->selectOption('drag_text_option','true');
$I->selectOption('tree_animation_enabled_option','true');
$I->selectOption('animation_enabled_option','true');
$I->selectOption('highlight_modified_tabs_option','false');
//$I->selectOption('overlay_scroll_bars_option','"system"');
$I->selectOption('show_encoding_option','false');
$I->selectOption('show_line_endings_option','false');
$I->selectOption('hot_exit_option','true');
$I->selectOption('always_prompt_for_file_reload_option','true');
$I->selectOption('open_files_in_new_window_option','false');
$I->selectOption('create_window_at_startup_option','true');
$I->selectOption('show_full_path_option','true');
$I->selectOption('preview_on_click_option','true');


$I->click('submit');
