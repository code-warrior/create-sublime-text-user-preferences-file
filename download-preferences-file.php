<?php
/**
 * The download file.
 *
 * This file is the target of a download link from the file
 * “create-preferences-file.php”. Using the $_SESSION array, this file creates a
 * new file containing all the options the user chose at the home page, then
 * downloads the file to the user’s computer.
 *
 * PHP version 5.3.29
 *
 * @category Create_Sublime_Text_User_Preferences_File
 * @package  Create_Sublime_Text_User_Preferences_File
 * @author   Roy A Vanegas <roy@thecodeeducators.com>
 * @license  https://gnu.org/licenses/gpl.html GNU General Public License
 * @link     https://bitbucket.org/code-warrior/create-sublime-text-user-preferences-file
 */

session_start();

date_default_timezone_set('GMT');

$date = new DateTime();
$timestamp = $date->getTimestamp();
$temp_folder = "temp_files/";
$filename = "Preferences.sublime-settings";
$full_filename = $temp_folder . $timestamp . "-" . $filename;

if (isset($_SESSION['options'])) {
    $options = $_SESSION['options'];
} else {
    $options = "\nError #37: Choices not made.\n";
}

/**
 * Open $full_filename for writing, truncating any contents in it, write the options
 * the user chose, then close it.
 */
$file = fopen($full_filename, "w+");
fwrite($file, $options);
fclose($file);

/**
 * Open $full_filename for reading from the beginning of the file, preparing it for
 * download, then close it.
 */
$file = fopen($full_filename, "r");
fpassthru($file);
fclose($file);

header('Content-Type: application/download');
header('Content-Disposition: attachment; filename="' . $full_filename . '"');
header("Content-Length: " . filesize($full_filename));
