from vanguard.tools.runner import run_cli_tool
from vanguard.core.targets import extract_hostname

def run(target: str, **kwargs) -> str:
    command = ["sslyze", extract_hostname(target)]
    return run_cli_tool(command, auth_metadata=kwargs.get("auth_metadata"))
