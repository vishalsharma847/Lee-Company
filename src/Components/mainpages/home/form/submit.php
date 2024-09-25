<?php
                if (
                    empty($_SESSION['6_letters_code']) ||
                    strcasecmp($_SESSION['6_letters_code'], $_POST['6_letters_code']) != 0
                ) {
                    //Note: the captcha code is compared case insensitively.
                    //if you want case sensitive match, update the check above to
                    // strcmp()
                    $errors = "\n The captcha code does not match!";
                }
                if (!empty($_POST["send"])) {
                    $userName = $_POST["userName"];
                    $userEmail = $_POST["userEmail"];
                    $userPhone = $_POST["userPhone"];
                    $location_from = $_POST["location_from"];
                    $location_to = $_POST["location_to"];
                    $date = $_POST["date"];
                    $toEmail = "leehomepackers@gmail.com";

                    $mailHeaders = "Name: " . $userName .
                        "\r\n Email: " . $userEmail  .
                        "\r\n Phone: " . $userPhone  .
                        "\r\n Location From: " . $location_from  .
                        "\r\n Location To: " . $location_to  .
                        "\r\n Date: " . $date . "\r\n";

                    if (mail($toEmail, $userName, $mailHeaders)) {
                        $message = "Your contact information is received successfully.";
                    }
                }
                ?>