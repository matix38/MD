<?php
// ===== CONFIGURACIÓN =====
$destinatario = "janmat777@gmail.com"; // ✅ Tu correo
$asunto_general = "Nuevo mensaje desde el formulario de Neomodulus";

// ===== SEGURIDAD BÁSICA =====
function limpiar($campo) {
  return htmlspecialchars(strip_tags(trim($campo)));
}

// ===== PROCESO DEL FORMULARIO =====
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nombre  = limpiar($_POST["nombre"] ?? '');
  $email   = limpiar($_POST["email"] ?? '');
  $asunto  = limpiar($_POST["asunto"] ?? '');
  $mensaje = limpiar($_POST["mensaje"] ?? '');
  $honeypot = $_POST["website"] ?? '';

  // Anti-spam (campo oculto no debe tener valor)
  if (!empty($honeypot)) {
    http_response_code(403);
    echo "Spam detectado.";
    exit;
  }

  if (!$nombre || !$email || !$asunto || !$mensaje) {
    http_response_code(400);
    echo "Faltan datos obligatorios.";
    exit;
  }

  // Validar correo electrónico
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Correo electrónico inválido.";
    exit;
  }

  // ===== CUERPO DEL CORREO =====
  $subject = "$asunto_general - $asunto";
  $body = "Has recibido un nuevo mensaje desde tu web:\n\n";
  $body .= "Nombre: $nombre\n";
  $body .= "Correo: $email\n";
  $body .= "Asunto: $asunto\n\n";
  $body .= "Mensaje:\n$mensaje\n\n";
  $body .= "Enviado el: " . date("d/m/Y H:i") . "\n";

  // ⚠️ Usa un remitente del mismo dominio para evitar bloqueo por Gmail
  $headers  = "From: Neomodulus <no-reply@neomodulus.com>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // ===== ENVÍO =====
  if (mail($destinatario, $subject, $body, $headers)) {
    http_response_code(200);
    echo "success";
  } else {
    http_response_code(500);
    echo "error";
  }
} else {
  http_response_code(405);
  echo "Método no permitido.";
}
?>
