using System.ComponentModel.DataAnnotations;

namespace RoghtiaSystem.Server.ViewModels
{
    public class SetPINCode
    {
        [Required, StringLength(128)]
        public string CurrentPassword { get; set; } = string.Empty;

        [Required, RegularExpression("^[0-9]{6,10}$")]
        public string PINCode { get; set; } = string.Empty;
    }
}
