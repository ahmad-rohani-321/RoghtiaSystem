using System.ComponentModel.DataAnnotations;

namespace RoghtiaSystem.Server.ViewModels
{
    public class ResetPassword : VerifyPINCode
    {
        [Required, StringLength(128, MinimumLength = 8)]
        public string NewPassword { get; set; } = string.Empty;
    }
}
