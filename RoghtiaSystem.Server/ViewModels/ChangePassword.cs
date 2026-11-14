using System.ComponentModel.DataAnnotations;

namespace RoghtiaSystem.Server.ViewModels
{
    public class ChangePassword
    {
        [Required, StringLength(128)]
        public string CurrentPassword { get; set; } = string.Empty;

        [Required, StringLength(128, MinimumLength = 8)]
        public string NewPassword { get; set; } = string.Empty;
    }
}
