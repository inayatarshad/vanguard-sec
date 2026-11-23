import re
import unittest

import vanguard


class VersionTests(unittest.TestCase):
    def test_version_is_present_and_well_formed(self):
        self.assertIsInstance(vanguard.__version__, str)
        self.assertTrue(vanguard.__version__)
        # Expect a dotted version such as 1.0.3 (optionally with a suffix).
        self.assertRegex(vanguard.__version__, r"^\d+\.\d+\.\d+")


if __name__ == "__main__":
    unittest.main()
